const jobs=[
['18 Oct 2026','Final ESG Field Readiness Review','Office','Preparation & final document checking','IDR 0'],
['17 Oct 2026','Review Field Survey Instruments','Office','HCV/HCS preparation','IDR 0'],
['15 Oct 2026','Community Stakeholder Contact Verification','Pontianak/Kubu Raya','Stakeholder preparation','Travel IDR 350,000/trip'],
['12 Oct 2026','Environmental Risk Data Compilation','Office','ESG data analysis','IDR 0'],
['10 Oct 2026','HCV/HCS Desktop Verification Update','Office','Spatial validation','IDR 0'],
['19 Oct - 9 Nov 2026','HCV/HCS Ground-Truthing Survey','Sambas','Field Survey','IDR 420,000/day x 22 days = IDR 9,240,000'],
['20 Oct 2026','Forest Condition Observation','Sambas','Ground Assessment','Included in field allowance'],
['22 Oct 2026','Community Interview & Social Mapping','Sambas','Stakeholder Engagement','Included in field allowance'],
['25 Oct 2026','Biodiversity Observation','Sambas','Environmental Survey','Included in field allowance'],
['28 Oct 2026','Land Use Verification','Sambas','Spatial Ground Check','Included in field allowance'],
['2 Nov 2026','ESG Compliance Evidence Collection','Sambas','Documentation','Included in field allowance'],
['6 Nov 2026','Field Finding Validation','Sambas','Verification','Included in field allowance'],
['9 Nov 2026','Field Survey Closing Report','Sambas','Field Completion','Included in field allowance'],
['10 Nov 2026','Demobilization (Demob)','Sambas - Office','Travel Return','IDR 420,000/day x 2 days = IDR 840,000'],
['12 Nov 2026','Post Fieldwork Data Consolidation','Office','Data Management','IDR 0'],
['13 Nov 2026','ESG Field Evidence Organization','Office','Documentation','IDR 0'],
['15 Nov 2026','Corrective Action Recommendation Draft','Office','ESG Reporting','IDR 0'],
['16 Nov 2026','Compliance Review Meeting','Office','Internal Review','IDR 0'],
['18 Nov 2026','Final ESG Assignment Report','Office','Reporting','IDR 0'],
['19 Nov 2026','Assignment Closure & Debriefing','Office','Final Debrief','IDR 0']
];

const box=document.getElementById('jobs');
jobs.forEach((j,i)=>{
box.innerHTML+=`
<div class="job card">
<h3>${i+1}. ${j[1]}</h3>
<p>📅 ${j[0]}</p>
<p>📍 ${j[2]} | ${j[3]}</p>
<p class="allowance">💰 ${j[4]}</p>
<button>View Assignment Detail</button>
</div>`
});
