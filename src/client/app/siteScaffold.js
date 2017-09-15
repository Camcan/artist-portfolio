import React from 'react';

export default {
   owner: "Rebecca Hawkes",
   home: {
      opener: <div style={{fontStyle: "italic", textAlign: "center", lineHeight: "11px"}}>
         <p>Rebecca Hawkes</p>
         <p>artist & writer</p>
         <p>moving light around until it means something</p>
      </div>,
      gallery: [
         { img: "./img/landing/1st.jpg"},
         { img: "./img/landing/2nd.jpg"},
         { img: "./img/landing/3rd.jpg"},
         { img: "./img/landing/4th.jpg"}
      ] 
   },
   about: {
      opener: <span>
         <p>
            I’m a freelance oil painter, poet, illustrator and sculptor. Raised roaming valleys of honeydewed beech forest and tussock-clad alpine farmland in the mid-Canterbury high country, I am now based in the windy city of Wellington, New Zealand. I relish in working across multiple media and my recent projects include paintings, sculptures, digital illustration, zines, murals, poetry, and lyric essays.
         </p>
         <p>
            My visual artwork is informed by the “natural” world and botanical illustration; mythology, symbolism, and the occult; and lived experiences traversing the cultural performance of femininity and queer sexuality. I aim to make art that evokes a bodily rawness and fervency, and reveals the inherent tension between notions of the grotesque and the beautiful.
         </p>
         <p>
            In 2012 I was awarded the national NZQA award for Top Scholar in Painting after my NCEA assessments and scholarship submission. I have continued to grow an artistic practice alongside my academic studies, regularly taking on commissioned works. I have also arranged and curated three exhibitions in central Wellington to showcase not only my own work but other emerging artists’ as well.
         </p>
         </span>,
      resumePath: "./pdf/RebeccaHawkesCV-2017.pdf", 
      academicHistory: [
         { 
            title: "Victoria University of Wellington",
            sections: [
               { 
                  title: "2017",
                  sections: [
                     {
                        title: "Honours in Media Studies",
                        institute: "School of English, Film, Theatre and Media Studies",
                        grade: "(current)"
                     }   
                  ]
               },  
               { 
                  title: "2016",
                  sections: [
                     {
                        title: "Masters in Creative Writing (Nonfiction)",
                        institute: "International Institute of Modern Letters",
                        grade: "with distinction"
                     },
                     {
                        title: "Co-President of VUW Media Society"
                     }
                  ]
               },
               {
                  title: "2015",
                  sections: [
                     {
                        title: "Completed Bachelor of Arts, majoring in Media Studies, minor in Creative Writing",
                        institution: "School of English, Film, Theatre, and Media Studies"
                     },
                     {
                        title: "BA Internship at Footnote Dance Company"
                     }
                  ]
               },
               {
                  title: "2014",
                  sections: [
                     {
                        title: "Inclusion on Dean’s List"
                     },
                     {
                        title: "VUW Excellence Award Scholarship"
                     }
                  ]
               },
               {
                  title: "2013",
                  sections: [
                     {
                        title: "Entered undergraduate studies towards Bachelor of Arts",
                     }   
                  ]
               }
            ]
         }
      ]
   },
   contact: {
      opener: "contact me for artwork availability, commissions, and collaborations",
      details: {
         email: "borca.hawkes@gmail.com",
         phone: "+64 21 895 561",
         links: [
            {  
               title: "Facebook",
               path: "https://www.facebook.com/rebeccahawkesart",
               icon: <svg style={{width:"24px",height:"24px"}} viewBox="0 0 24 24">
                <path fill="#000000" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z" />
            </svg>
            },
            {
               title: "Instagram",
               path: "https://www.instagram.com/rancid_liquorice",
               icon: <svg style={{width:"24px",height:"24px"}} viewBox="0 0 24 24">
                      <path fill="#000000" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                      </svg>
            },
            {
               title: "LinkedIn",
               path: "https://www.linkedin.com/in/arghhawkes",
               icon: <svg style={{width:"24px",height:"24px"}} viewBox="0 0 24 24">
                      <path fill="#000000" d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
                      </svg>
            }
         ]
      }
   }
}
