import React from 'react';

export default {
   owner: "Rebecca Hawkes",
   home: {
      opener: "Gummies cheesecake pie lollipop gummi bears halvah. Cookie sweet roll ice cream sweet cupcake cookie sugar plum dragée cotton candy. Cake fruitcake tart sweet roll cookie tart toffee pie.",
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
   }
}
