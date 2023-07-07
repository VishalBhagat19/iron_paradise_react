import React from 'react'
import classe from '../css/classe.css'
function Class() {
  return (
    <>
<section className="banner12 w-100">
    <div class="container-fluid">
      <div class="row">
        <h1>CLASSES</h1>
      </div>
    </div>
 

  <div className='container-fluid'>
  <div class="row">
        <h3>Class Time-Table</h3>
      </div>
  </div>
  </section>
  <br/><br/><br/>
  <div class="container-fluid banner13">
  <div class="container">
    <table class="table table-bordered text-black bg-secondary">
     <thead>
     <tr>
       <th colspan="6" class="text-center ">Time Periods of Classes</th>
      </tr>
      <tr>
     
       <th>Time</th>
       <th>Monday </th>
       <th>Tuesday </th>
       
       <th>Wednesday </th>
       <th>Thursday </th>
       <th>Friday </th>
       <th>Saturday </th>
       
      </tr>
     </thead>
      <tbody>
      <tr> <td>4AM-5AM</td>
       <td>Cardio
        John Doe
       </td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
       
      
      </tr>
      <tr>
       <td>5AM-6AM</td>
       <td></td>
       <td>Cardio
        John Doe
       </td>
       <td></td>
       <td></td><td></td>
       <td></td>
      </tr>
      <tr>
   
       <td>6AM-7AM</td>
       <td>

       </td>
       <td></td>
       <td>Cardio
        John Doe
       </td>
       <td></td>
       <td></td>
       <td></td>
      </tr>
      <tr>

       <td>7AM-8AM</td>
       <td></td>
       <td></td>
       <td>shoulder with james
       </td>
       <td></td>
       <td></td>
       <td></td>
      </tr>
      <tr>

       <td>8AM-9AM</td>
       <td></td>
       <td></td>
       <td>Leg workout
       </td>
       <td></td>
       <td></td>
      </tr>
      <tr>
   
       <td>9AM-10AM</td>
       <td></td>
       <td></td>
       <td></td>
       <td>chest workout
       </td>
       <td>Back
        workout 
       </td>
       <td></td>


      </tr>
      <tr>
       <td>10AM-11AM</td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
       <td>Arms
        John Doe
       </td>
       <td></td>

      </tr>
   
      </tbody>
      
   </table>
  </div>
</div>
<br/><br/>
  <section class="a12">
  <div class="container-fluid"> 
       <div class="row">
        <h3 className='text-center bg-info'>In Classes</h3>
        <br/><br/>
        <div class="col-md-3"></div>
         <div class="col-md-2">
          <img src="img/gallery/train1.jpg"class="img-fluid"/>
           <h4>FITNESS CONSULTATION</h4>
              <p>Through a short survey, your coach will prescribe the perfect program to get you started and on track to meet your fitness goals.</p>
         </div>
        
         <div class="col-md-2">
          <img src="img/gallery/train2.jpg" class="img-fluid"/>
          <h4>TEAM WORKOUTS</h4>
            <p>Full-body workouts are designed to build strength and endurance, using the energy of the group and the expertise of the coach to maximize your results.</p>
         </div>
          <div class="col-md-2">
            <img src="img/gallery/train3.jpg" class="img-fluid"/>
           <h4>ONE-ON-ONE TRAINING</h4>
           <p>One-on-one personalized workouts with your coach are designed to make you stronger from the inside out.</p>
         </div>
         <div class="col-md-3"></div>
       </div>
  </div>
  </section>
     
  <section class="why">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 mt-5">
            <img src="img/div_box_1.jpg"class="img-fluid"/>
        </div>
        <div class="col-md-3 mt-5">
            <img src="img/div_box_2.jpg"class="img-fluid"/>
        </div>
        <div class="col-md-3 mt-5">
            <img src="img/div_box_3.jpg"class="img-fluid"/>
        </div>
        <div class="col-md-3 mt-5">
            <img src="img/div_box_4.jpg"class="img-fluid"/>
        </div>
      </div>
    </div>
  </section>
  
  <div class="container-fluid a">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h5>VISHAL BHAGAT</h5>
          <h5>contact</h5>
          <h5>6266339138</h5>
        </div>  
        <div class="col-md-6">
           <h5>GAUTAM KUSHWAH</h5>
           <h5>contact</h5>
           <h5>7974020492</h5>          
        </div>    
      </div>
    </div>
  </div>


    </>
  )
}

export default Class