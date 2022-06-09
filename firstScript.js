

//document.getElementById('submitButton').onclick = function(){
    let dateIn = new Date(document.getElementById("datetimeIn").value);
    let dateOut = new Date(document.getElementById("datetimeOut").value);
    let discount = document.getElementById("buttonDiskount").checked;
    let parkingSign = document.getElementById("buttonParkingSign").checked;
    let output1 = document.getElementById('output');
    console.log(dateIn)
    console.log(dateOut)
    

    //let dateIn = new Date('tue Jun 8 2022 12:10:00 GMT+0300 (Israel Daylight Time)');//זמנ
    //let dateOut = new Date('tue jun 8 2022 18:00:00 GMT+0300 (Israel Daylight Time)');//זמני
    
   




    
    
const montifyory ={
    name_parking: 'מונטיפיורי',
    parking_sign_work: true,
    max_for_day : 80,
    cost_a:{
        start_day: 0,
        start_hour: 7,
        stop_day: 4, 
        stop_hour: 15, 
        price_for1hour: 16, 
        price_for_1_4_huor: 4, 
        price_for_day: 80, 
        stop_price_for_day: 7
        },

    cost_b:{
        start_day: 0,
        start_hour: 16,
        stop_day: 4, 
        stop_hour: 23, 
        price_for1hour: 0, 
        price_for_1_4_huor: 0, 
        price_for_day: 24, 
        stop_price_for_day: 7
        },
    cost_c:{
        start_day: 0,
        start_hour: 0,
        stop_day: 4, 
        stop_hour: 6, 
        price_for1hour: 0, 
        price_for_1_4_huor: 0, 
        price_for_day: 24, 
        stop_price_for_day: 7
        } ,
    cost_d:{
        start_day: 5,
        start_hour: 0,
        stop_day: 6, 
        stop_hour: 23, 
        price_for1hour: 0, 
        price_for_1_4_huor: 0, 
        price_for_day: 24, 
        stop_price_for_day: 7
        },  
    cost_e:{
        start_day: 6,
        start_hour: 0,
        stop_day: 6, 
        stop_hour: 6, 
        price_for1hour: 0, 
        price_for_1_4_huor: 0, 
        price_for_day: 24, 
        stop_price_for_day: 0
        }, 
    cost_f:{
        start_day: 7,
        start_hour: 0,
        stop_day: 0, 
        stop_hour: 0, 
        price_for1hour: 0, 
        price_for_1_4_huor: 0, 
        price_for_day: 0, 
        stop_price_for_day: 0
        }                
        
 
  
    }


const gruzenberg ={
        name_parking: 'גרוזנברג',
        parking_sign_work: false,
        max_for_day : 85,
        cost_a:{
            start_day: 0,
            start_hour: 6,
            stop_day: 4, 
            stop_hour: 15, 
            price_for1hour: 25, 
            price_for_1_4_huor: 5, 
            price_for_day: 85, 
            stop_price_for_day: 6
            },
    
        cost_b:{
            start_day: 0,
            start_hour: 16,
            stop_day: 4, 
            stop_hour: 21, 
            price_for1hour: 15, 
            price_for_1_4_huor: 4, 
            price_for_day: 44, 
            stop_price_for_day: 6
            },
        cost_c:{
            start_day: 0,
            start_hour: 22,
            stop_day: 6, 
            stop_hour: 23, 
            price_for1hour: 0, 
            price_for_1_4_huor: 0, 
            price_for_day: 24, 
            stop_price_for_day: 6
            } ,
        cost_d:{
            start_day: 0,
            start_hour: 0,
            stop_day: 6, 
            stop_hour: 5, 
            price_for1hour: 0, 
            price_for_1_4_huor: 0, 
            price_for_day: 24, 
            stop_price_for_day: 6
            },  
        cost_e:{
            start_day: 5,
            start_hour: 16,
            stop_day: 4, 
            stop_hour: 22, 
            price_for1hour: 0, 
            price_for_1_4_huor: 0, 
            price_for_day: 70, 
            stop_price_for_day: 6
            } ,       
        cost_f:{
            start_day: 5,
            start_hour: 6,
            stop_day: 6, 
            stop_hour: 21, 
            price_for1hour: 15, 
            price_for_1_4_huor: 4, 
            price_for_day: 44, 
            stop_price_for_day: 6
            } 
     
      
        }



        const beyt_psagot ={
            name_parking: 'בית פסגות',
            parking_sign_work: false,
            max_for_day : 110,
            cost_a:{
                start_day: 0,
                start_hour: 6,
                stop_day: 4, 
                stop_hour: 15, 
                price_for1hour: 28, 
                price_for_1_4_huor: 6, 
                price_for_day: 110, 
                stop_price_for_day: 6
                },
        
            cost_b:{
                start_day: 0,
                start_hour: 16,
                stop_day: 3, 
                stop_hour: 23, 
                price_for1hour: 0, 
                price_for_1_4_huor: 0, 
                price_for_day: 30, 
                stop_price_for_day: 6
                },
            cost_c:{
                start_day: 1,
                start_hour: 0,
                stop_day: 4, 
                stop_hour: 5, 
                price_for1hour: 0, 
                price_for_1_4_huor: 0, 
                price_for_day: 30, 
                stop_price_for_day: 6
                } ,
            cost_d:{
                start_day: 4,
                start_hour: 16,
                stop_day: 4, 
                stop_hour: 23, 
                price_for1hour: 25, 
                price_for_1_4_huor: 5, 
                price_for_day: 80, 
                stop_price_for_day: 6
                },  
            cost_e:{
                start_day: 5,
                start_hour: 0,
                stop_day: 6, 
                stop_hour: 23, 
                price_for1hour: 25, 
                price_for_1_4_huor: 5, 
                price_for_day: 80, 
                stop_price_for_day: 6
                } ,       
            cost_f:{
                start_day: 0,
                start_hour: 0,
                stop_day: 0, 
                stop_hour: 5, 
                price_for1hour: 25, 
                price_for_1_4_huor: 5, 
                price_for_day: 80, 
                stop_price_for_day: 6
                } 


         
          
            }




    if(discount){
        //beyt_psagot.cost_a.start_hour =8
        beyt_psagot.cost_b.price_for_day = 0
        beyt_psagot.cost_b.price_for1hour = 0
        beyt_psagot.cost_b.stop_price_for_day = 8
        beyt_psagot.cost_c.price_for_day = 0
        beyt_psagot.cost_c.price_for1hour = 0
        beyt_psagot.cost_c.stop_price_for_day = 8
        beyt_psagot.cost_e.price_for_day = 0
        beyt_psagot.cost_e.price_for1hour = 0
        beyt_psagot.cost_e.stop_price_for_day = 8
        beyt_psagot.cost_f.price_for_day = 0
        beyt_psagot.cost_f.price_for1hour = 0
        beyt_psagot.cost_f.stop_price_for_day = 8
    }

        
        
        
        const rotshild ={
            name_parking: 'רוטשילד',
            parking_sign_work: true,
            max_for_day : 80,
            cost_a:{
                start_day: 0,
                start_hour: 7,
                stop_day: 4, 
                stop_hour: 21, 
                price_for1hour: 16, 
                price_for_1_4_huor: 4, 
                price_for_day: 80, 
                stop_price_for_day: 7
                },
        
            cost_b:{
                start_day: 0,
                start_hour: 22,
                stop_day: 4, 
                stop_hour: 23, 
                price_for1hour: 0, 
                price_for_1_4_huor: 0, 
                price_for_day: 24, 
                stop_price_for_day: 7
                },
            cost_c:{
                start_day: 1,
                start_hour: 0,
                stop_day: 4, 
                stop_hour: 6, 
                price_for1hour: 0, 
                price_for_1_4_huor: 0, 
                price_for_day: 24, 
                stop_price_for_day: 7
                } ,
            cost_d:{
                start_day: 5,
                start_hour: 7,
                stop_day: 6, 
                stop_hour: 23, 
                price_for1hour: 0, 
                price_for_1_4_huor: 0, 
                price_for_day: 24, 
                stop_price_for_day: 7
                },  
            cost_e:{
                start_day: 0,
                start_hour: 0,
                stop_day: 0, 
                stop_hour: 6, 
                price_for1hour: 0, 
                price_for_1_4_huor: 0, 
                price_for_day: 24, 
                stop_price_for_day: 7
                } ,       
            cost_f:{
                start_day: 5,
                start_hour: 0,
                stop_day: 6, 
                stop_hour: 6, 
                price_for1hour: 0, 
                price_for_1_4_huor: 0, 
                price_for_day: 24, 
                stop_price_for_day: 7
                } 


         
          
            }

            function parking(name_parking,parking_sign_work,max_for_day,cost_a,cost_b,cost_c,cost_d,cost_e,cost_f){
                let new_date_in = new Date(dateIn);
                let count_a = 0
                let count_b = 0
                let count_c = 0
                let count_d = 0
                let count_e = 0
                let count_f = 0
                let sum = 0
               


                while(new_date_in < dateOut){
                    new_date_in.setMinutes((new_date_in.getMinutes())+15)
                    let new_date_in_next = new Date(new_date_in)
                    new_date_in_next.setMinutes((new_date_in_next.getMinutes())+15)
                    let h_next = new_date_in_next.getHours()
                    let d_next = new_date_in_next.getDay()
                    //console.log(new_date_in_next)




                    let d = new_date_in.getDay()
                    let h = new_date_in.getHours()
                    if(d >= cost_a.start_day &&
                        d <= cost_a.stop_day&&
                        h >= cost_a.start_hour&&
                        h <= cost_a.stop_hour){
                            //new_date_in.setMinutes((new_date_in.getMinutes())+15)
                            count_a = count_a + 1
                            //console.log(name_parking,new_date_in,count_a,'a1',sum)
                        

                            if(((count_a * cost_a.price_for_1_4_huor ) > cost_a.price_for_day) || cost_a.price_for1hour == 0){
                                sum = sum + cost_a.price_for_day;
                                new_date_in.setHours(new_date_in.getHours() + 24);
                                new_date_in.setHours(cost_a.stop_price_for_day)
                                count_a = 0
                                //console.log(name_parking,new_date_in,count_a,'a2',sum)
                                
                            }
                            if(!(new_date_in<dateOut)||
                                !(d_next >= cost_a.start_day)||
                                !(d_next <= cost_a.stop_day)||
                                !(h_next >= cost_a.start_hour)||
                                !(h_next <= cost_a.stop_hour)){
                                    if(count_a > 0){
                                        sum = sum + cost_a.price_for1hour
                                        count_a = count_a - 4
                                        //console.log(name_parking,new_date_in,count_a,'a3',sum)
                                        
                                        if(count_a > 0){
                                            sum = sum + count_a * cost_a.price_for_1_4_huor
                                            count_a = 0
                                            //console.log(name_parking,new_date_in,count_a,'a4',sum)
                                          
                                        }
                                    } 
                                }
                            }else if(d >= cost_b.start_day &&
                                d <= cost_b.stop_day&&
                                h >= cost_b.start_hour&&
                                h <= cost_b.stop_hour){
                                    //new_date_in.setMinutes((new_date_in.getMinutes())+15)
                                    count_b = count_b + 1
                                    //console.log(name_parking,new_date_in,count_b,'b1',sum)
                                    
        
                                    if(((count_b * cost_b.price_for_1_4_huor ) > cost_b.price_for_day) || cost_b.price_for1hour == 0){
                                        sum = sum + cost_b.price_for_day;
                                        new_date_in.setHours(new_date_in.getHours() + 24);
                                        new_date_in.setHours(cost_b.stop_price_for_day)
                                        count_b = 0
                                        //console.log(name_parking,new_date_in,count_b,'b2',sum)

                                        
                                    }
                                    if(!(new_date_in_next<dateOut)||
                                        !(d_next >= cost_b.start_day)||
                                        !(d_next <= cost_b.stop_day)||
                                        !(h_next >= cost_b.start_hour)||
                                        !(h_next <= cost_b.stop_hour)){
                                            if(count_b > 0){
                                                sum = sum + cost_b.price_for1hour
                                                count_b = count_b - 4
                                                //console.log(name_parking,new_date_in,count_b,'b3',sum)

                                                
                                                if(count_b > 0){
                                                    sum = sum + count_b * cost_b.price_for_1_4_huor
                                                    count_b = 0
                                                    //console.log(name_parking,new_date_in,count_b,'b4',sum)

                                                    
                                                }
                                            } 
                                        }
                                    }else if(d >= cost_c.start_day &&
                                                d <= cost_c.stop_day&&
                                                h >= cost_c.start_hour&&
                                                h <= cost_c.stop_hour){
                                                    new_date_in.setMinutes((new_date_in.getMinutes())+15)
                                                    count_c = count_a + 1
                                                    
                        
                                                    if(((count_c * cost_c.price_for_1_4_huor ) > cost_c.price_for_day) || cost_c.price_for1hour == 0){
                                                        sum = sum + cost_c.price_for_day;
                                                        new_date_in.setHours(new_date_in.getHours() + 24);
                                                        new_date_in.setHours(cost_c.stop_price_for_day)
                                                        count_c = 0
                                                        
                                                    }
                                                    if(!(new_date_in_next<dateOut)||
                                                        !(d >= cost_c.start_day)||
                                                        !(d <= cost_c.stop_day)||
                                                        !(h >= cost_c.start_hour)||
                                                        !(h <= cost_c.stop_hour)){
                                                            if(count_c > 0){
                                                                sum = sum + cost_c.price_for1hour
                                                                count_c = count_c - 4
                                                            
                                                                if(count_c > 0){
                                                                    sum = sum + count_c * cost_c.price_for_1_4_huor
                                                                    count_c = 0
                                                              
                                                                }
                                                            } 
                                                        }
                                                    }else if(d >= cost_d.start_day &&
                                                        d <= cost_d.stop_day&&
                                                        h >= cost_d.start_hour&&
                                                        h <= cost_d.stop_hour){
                                                            //new_date_in.setMinutes((new_date_in.getMinutes())+15)
                                                            count_d = count_d + 1
                                                          
                                                            if(((count_d * cost_d.price_for_1_4_huor ) > cost_d.price_for_day) || cost_d.price_for1hour == 0){
                                                                sum = sum + cost_d.price_for_day;
                                                                new_date_in.setHours(new_date_in.getHours() + 24);
                                                                new_date_in.setHours(cost_d.stop_price_for_day)
                                                                count_d = 0
                                                             
                                                            }
                                                            if(!(new_date_in_next<dateOut)||
                                                                !(d_next >= cost_d.start_day)||
                                                                !(d_next <= cost_d.stop_day)||
                                                                !(h_next >= cost_d.start_hour)||
                                                                !(h_next <= cost_d.stop_hour)){
                                                                    if(count_d > 0){
                                                                        sum = sum + cost_d.price_for1hour
                                                                        count_d = count_d - 4
                                                                       
                                                                        if(count_d > 0){
                                                                            sum = sum + count_d * cost_d.price_for_1_4_huor
                                                                            count_d = 0
                                                                         
                                                                        }
                                                                    } 
                                                                }
                                                            }else if(d >= cost_e.start_day &&
                                                                d <= cost_e.stop_day&&
                                                                h >= cost_e.start_hour&&
                                                                h <= cost_e.stop_hour){
                                                                    new_date_in.setMinutes((new_date_in.getMinutes())+15)
                                                                    count_e = count_e + 1
                                                                    
                                        
                                                                    if(((count_e * cost_e.price_for_1_4_huor ) > cost_e.price_for_day) || cost_e.price_for1hour == 0){
                                                                        sum = sum + cost_e.price_for_day;
                                                                        new_date_in.setHours(new_date_in.getHours() + 24);
                                                                        new_date_in.setHours(cost_e.stop_price_for_day)
                                                                        count_e = 0
                                                                       
                                                                    }
                                                                    if(!(new_date_in_next<dateOut)||
                                                                        !(d_next >= cost_e.start_day)||
                                                                        !(d_next <= cost_e.stop_day)||
                                                                        !(h_next >= cost_e.start_hour)||
                                                                        !(h_next <= cost_e.stop_hour)){
                                                                            if(count_e > 0){
                                                                                sum = sum + cost_e.price_for1hour
                                                                                count_e = count_e - 4
                                                                                
                                                                                if(count_e > 0){
                                                                                    sum = sum + count_e * cost_e.price_for_1_4_huor
                                                                                    count_e = 0
                                                                                    
                                                                                }
                                                                            } 
                                                                        }
                                                                    }else if(d >= cost_f.start_day &&
                                                                        d <= cost_f.stop_day&&
                                                                        h >= cost_f.start_hour&&
                                                                        h <= cost_f.stop_hour){
                                                                            //new_date_in.setMinutes((new_date_in.getMinutes())+15)
                                                                            count_f = count_f + 1
                                                                            
                                                
                                                                            if(((count_f * cost_f.price_for_1_4_huor ) > cost_f.price_for_day) || cost_f.price_for1hour == 0){
                                                                                sum = sum + cost_f.price_for_day;
                                                                                new_date_in.setHours(new_date_in.getHours() + 24);
                                                                                new_date_in.setHours(cost_f.stop_price_for_day)
                                                                                count_f = 0
                                                                                
                                                                            }
                                                                            if(!(new_date_in_next<dateOut)||
                                                                                !(d_next >= cost_f.start_day)||
                                                                                !(d_next <= cost_f.stop_day)||
                                                                                !(h_next >= cost_f.start_hour)||
                                                                                !(h_next <= cost_f.stop_hour)){
                                                                                    if(count_f > 0){
                                                                                        sum = sum + cost_f.price_for1hour
                                                                                        count_f = count_f - 4
                                                                                        
                                                                                        if(count_f > 0){
                                                                                            sum = sum + count_f * cost_f.price_for_1_4_huor
                                                                                            count_f = 0
                                                                                            
                                                                                        }
                                                                                    } 
                                                                                }
                                                                            }
                        }
                        if((Math.ceil((dateOut - dateIn)/(1000*60*60*24))*max_for_day)<sum){
                            sum = (Math.ceil((dateOut - dateIn)/(1000*60*60*24))*max_for_day)
                        }
                        if(parking_sign_work && parkingSign){
                            sum = 0.25* sum
                        }
                        console.log(sum)
                        return name_parking+'  '+ sum

                

                
            }


            let res_beyt_psagot = parking(
                beyt_psagot.name_parking,
                beyt_psagot.parking_sign_work,
                beyt_psagot.max_for_day,
                beyt_psagot.cost_a,
                beyt_psagot.cost_b,
                beyt_psagot.cost_c,
                beyt_psagot.cost_d,
                beyt_psagot.cost_e,
                beyt_psagot.cost_f)



                let res_gruzenberg = parking(
                    gruzenberg.name_parking,
                    gruzenberg.parking_sign_work,
                    gruzenberg.max_for_day,
                    gruzenberg.cost_a,
                    gruzenberg.cost_b,
                    gruzenberg.cost_c,
                    gruzenberg.cost_d,
                    gruzenberg.cost_e,
                    gruzenberg.cost_f)


                    
                let res_montifyory = parking(
                    montifyory.name_parking,
                    montifyory.parking_sign_work,
                    montifyory.max_for_day,
                    montifyory.cost_a,
                    montifyory.cost_b,
                    montifyory.cost_c,
                    montifyory.cost_d,
                    montifyory.cost_e,
                    montifyory.cost_f)


                    let res_rotshild = parking(
                        rotshild.name_parking,
                        rotshild.parking_sign_work,
                        rotshild.max_for_day,
                        rotshild.cost_a,
                        rotshild.cost_b,
                        rotshild.cost_c,
                        rotshild.cost_d,
                        rotshild.cost_e,
                        rotshild.cost_f)


    
    

 
 

output1.innerHTML = res_beyt_psagot + '  ' + ' ש"ח '+'   '+ res_rotshild  + ' ש"ח '+ '   '+ res_montifyory  + ' ש"ח '  +  res_gruzenberg  + ' ש"ח '

 
}
    
   
    













