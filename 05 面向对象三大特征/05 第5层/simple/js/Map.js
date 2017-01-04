/**
 * Created by Danny on 2015/9/13 10:31.
 */
(function(){
    //地图类。存放的是，已经沉底的那些方块
    window.Map = Class.extend({
        init : function(){
            //有效行列。
            this.colAmount = 12;
            this.rowAmount = 24;

            //存放地图，是抽象的数据。
            this.existBlockMap = [
                "xxx000000000000xxx",
                "xxx000000000000xxx",
                "xxx000000000000xxx",
                "xxx000000000000xxx",
                "xxx000000000000xxx",
                "xxx000000000000xxx",
                "xxx000000000000xxx",
                "xxx000000000000xxx",
                "xxx000000000000xxx",
                "xxx000000000000xxx",
                "xxx000000000000xxx",
                "xxx000000000000xxx",
                "xxx000000000000xxx",
                "xxx000000000000xxx",
                "xxx000000000000xxx",
                "xxx000000000000xxx",
                "xxx000000000000xxx",
                "xxx000000000000xxx",
                "xxx000000000000xxx",
                "xxx000000000000xxx",
                "xxx000000000000xxx",
                "xxx000000000000xxx",
                "xxx000000000000xxx",
                "xxx000000000000xxx",
                "xxxxxxxxxxxxxxxxxx",
                "xxxxxxxxxxxxxxxxxx",
                "xxxxxxxxxxxxxxxxxx",
                "xxxxxxxxxxxxxxxxxx"
            ];
            //存放方块，是真的存放cellBlock的矩阵
            this.existBlock = [
                [null,null,null,null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null,null,null,null]
            ]
        },
        //根据地图创造转块。
        creatBlocksByMap : function(){
            for(var r = 0 ; r < this.rowAmount ; r++){
                for(var c = 3 ; c < 3 + this.colAmount ; c++){
                    // substr(a,b) 表示从a位开始，截取b位。
                    var thisBlockColor = this.existBlockMap[r].substr(c,1);
                    //三元写法。如果这个颜色值不是0，那么new出来一个。
                    //如果是0，那么把这位写成null
                    this.existBlock[r][c - 3] = thisBlockColor != "0" ? new CellBlock(r,c - 3,thisBlockColor) : null;
                }
            }
        },
        // 渲染所有沉底的方块
        renderAllExistBlocks : function(){
            for(var r = 0 ; r < this.rowAmount ; r++){
                for(var c = 0 ; c < this.colAmount ; c++){
                    //短路写法，如果在existBlock矩阵中，这项不是null。那么
                    //就调用这项的render
                    this.existBlock[r][c] && this.existBlock[r][c].render();
                 }
            }
        },
        //新老融合。让4*4的小矩阵，融合进我们的地图里面
        addFourFourIntoMyMap : function(ab){
            for(var r = 0 ; r < 4 ; r++){
                for(var c = 0 ; c < 4 ; c++){
                    var theAbChar = ab.fourfourMap[r].substr(c,1);
                    //如果44这一位不是0，那么替换
                    if(theAbChar != "0") {
                        this.existBlockMap[r + ab.row] = zhangyizhi(this.existBlockMap[r + ab.row], c + ab.col + 3, theAbChar);
                    }
                }
            }
            //新创建
            this.creatBlocksByMap();
            //验证死亡
            if(game.map.existBlockMap[0] != "xxx000000000000xxx"){
                game.stop();
            }
        },
        //消行
        xiaohang : function(){
            //消行最大的难点在于，可以同时消除很多行。
            //理论上，同时消除的行是4行。所以，要有一个数组，存放着要消除的行的行号。
            //我们设置一个数组，这个数字，里面要存放行号。就是满行的行的行号。
            var fullRowNumber = [];
            //下面的for循环，再筛选哪些行是满的，这个for循环并没有消行。
            //仅仅是筛选。
            //从最后一行开始筛选，找出哪些行是满行
            for(var row = this.rowAmount - 1 ; row >= 0; row--){
                //这一行的矩阵（就是一个字符串，形如"xxx123123001230xxx"）
                if(this.existBlockMap[row].indexOf("0") == -1){
                    //如果字符串里面没有0，就是满行
                    fullRowNumber.push(row);
                }
            }

            //下面这个for循环是让所有的满行，消失
            //仅仅负责消失，并不负责所有上面的行下移。
            for(var i = 0 ; i < fullRowNumber.length ; i++){
                this.existBlockMap[fullRowNumber[i]] = "xxx000000000000xxx";
                //让Block更改
                this.creatBlocksByMap();
            }

            //上面的行都下移。下移几行啊？
            //比较复杂，比如你的fullRowNumber里面是[19、22]
            //那么0~18行就要下移2行；20、21行下移一行。
            //新的第20行就是原18，第19行就是原17，第18行就是原16……第2行就是原0
            //新的第22行就是原21、新的21行就是原20
            //所以，在编程的时候，算法是：
            //让22行以前的行，都下落一行；再让19行以前的行，都下落1行；这样
            //0~18都下落了两次。
            for(var i = fullRowNumber.length - 1 ; i >= 0 ; i--){
                //从这一行开始，上面的所有行，都下移一行
                for(var j = fullRowNumber[i]; j > 0 ; j--){
                    this.existBlockMap[j] = this.existBlockMap[j - 1];
                }
                //让Block更改
                this.creatBlocksByMap();
            }
        }
    });

    //zhangyizhi贡献的函数。能够把字符串obj的第x位，替换为str
    function zhangyizhi(obj,x,str){
        if (x >= obj.length - 1) {
            return obj.slice(0, x) + str
        }else{
            return obj.slice(0, x) + str + obj.slice(x + 1)
        }
    }
})();