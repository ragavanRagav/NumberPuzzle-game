$(document).ready(
    ()=>{
        let score = 0;
        // let n = 0;
        let list = [];
        let grid=[];
        let match = [1,2,3,4,5,6,7,8,0];
        $("button").each(function(){
            list.push(Number($(this).text()));
        });
        while(list.length){
            grid.push(list.splice(0,3));
        }

        $("button").on('click',function(){
            let cur = Number($(this).text());
            let place = index(cur,grid);
            let next = index(0,grid);
            if(isValid(place[0],place[1],next[0],next[1])){
                score++;
                let temp = grid[place[0]][place[1]];
                grid[place[0]][place[1]] = 0; 
                grid[next[0]][next[1]] = temp;
                $('button').each(function(){
                    if(Number($(this).text()) === 0){
                        $(this).text(cur);
                    }
                });
                $(this).text('');
                list=grid.flat();
            }
            $('.score span').text(score);
            if(JSON.stringify(list)==JSON.stringify(match)){
                $('.won').css('display','block');
            }
        })
        const isValid = (x1,y1,x2,y2)=>{
            if(((x1+1 === x2 || x1-1 === x2)&& y1===y2 ) || (x1===x2 &&(y1+1 === y2 || y1-1 === y2))){
                return true;
            }
            return false;
        }
        const index =(e,mat)=>{
            for(let i=0;i<mat.length;i++){
                for(let j=0;j<mat[i].length;j++){
                    if(mat[i][j] === e){
                        return [i,j];
                    }
                }
            }
            return[0,0];
        }
        $('.reset').on('click',function(){
            window.location.reload();
        })
    }
);