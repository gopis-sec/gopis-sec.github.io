/* ============================================================
   EDIT YOUR CONTENT HERE — the whole page is built from this block
   ============================================================ */
const DATA = {
  name: "Gopi S.",
  firstName: "Gopi",
  initials: "GS",
  title: "Sr. Security Engineer | Cybersecurity | SecOps | Security Engineering",
  summary: "Security Engineer with 5+ years of experience across Security Operations, incident investigation, Data Loss Prevention, endpoint security, network security, email security, vulnerability assessment and security policy enforcement. Experienced in analyzing high-volume security events, identifying suspicious activity, investigating incidents, tuning security controls, reducing false positives, troubleshooting security platforms and coordinating remediation with internal teams and vendors. Strong hands-on exposure to SIEM, DLP, EDR/EPP, proxy, email, DNS and vulnerability assessment platforms in 24x7 security environments.",
  badges: ["SecOps", "SIEM", "DLP", "Incident Response"],
  location: "Chennai, India",
  email: "sgopi1997@gmail.com",
   phones: "",
  linkedin: "https://www.linkedin.com/in/gopi--s",   // ← add your LinkedIn URL here (leave "" to hide)
  github: "https://github.com/gopis-sec",     // ← add your GitHub URL here (leave "" to hide)
  contactNote: "Open to Security Engineering and SecOps opportunities. Reach out and let’s connect.",
  competencies: [
    { name: "Security Engineering", desc: "Security Monitoring, Incident Investigation, Threat Analysis, Vulnerability Assessment, Security Auditing, Security Controls, Security Reviews, Risk & Compliance" },
    { name: "Application & Infrastructure Security", desc: "Application Security Fundamentals, Network Security, Endpoint Security, Data Protection, DLP, Email Security, DNS Security, Proxy Security, Firewall, IPS" },
    { name: "Security Operations", desc: "SIEM, Incident Response, Threat Detection, Log Analysis, Event Correlation, False-Positive Analysis, Detection Tuning, RCA, SLA Management" },
    { name: "Technical Analysis", desc: "Log Analysis, Packet Analysis, Troubleshooting, Root Cause Analysis, Security Tool Integration, Policy Optimization, Process Improvement" }
  ],
  experience: [
    { company: "LTM", role: "Sr. Security Engineer", period: "Jan 2025 – Present", points: [
      "Perform security monitoring, investigation and analysis across enterprise security controls and security events.",
      "Investigate suspicious activity and security incidents, correlate relevant event data and support appropriate remediation.",
      "Work with security technologies including Microsoft Sentinel, Microsoft Defender, Microsoft Defender for Cloud and Forcepoint DLP.",
      "Analyze security alerts and investigate potential threats, policy violations and data-security events.",
      "Support security incident investigation, threat hunting and security-control optimization through detailed event analysis.",
      "Develop and maintain security-focused operational improvements, including alert tuning, investigation workflows and automation opportunities.",
      "Perform root-cause-oriented analysis of security events and coordinate remediation with relevant stakeholders.",
      "Support security policy enforcement, DLP investigations and security monitoring activities in an enterprise environment."
    ]},
    { company: "Tata Communications Ltd.", role: "Sr. SOC Security Analyst", period: "Apr 2020 – Dec 2024", points: [
      "Conducted proactive monitoring, log analysis, investigation and mitigation of security incidents across WAF, firewall, proxy, antivirus, endpoint and email security environments.",
      "Analyzed SIEM and IPS event data to identify suspicious activity, intrusion attempts, potential compromises and false-positive events.",
      "Investigated malicious phishing emails, suspicious domains and IPS events using open-source investigation techniques and recommended blocking or remediation.",
      "Fine-tuned SIEM and security monitoring use cases based on event patterns, incident findings and false-positive analysis.",
      "Investigated DLP policy violations and potential data compromises and coordinated remediation with relevant stakeholders.",
      "Configured data classification policies according to data sensitivity and organizational security requirements.",
      "Performed vulnerability and security-control monitoring and supported remediation of identified issues.",
      "Researched emerging threats and vulnerabilities and assessed their potential impact on monitored environments.",
      "Performed L1/L2 security support, troubleshooting and vendor coordination for escalated security issues.",
      "Analyzed email security events using DDEI and IMSVA to identify spam, malicious content and potential exploitation attempts.",
      "Monitored Websense proxy traffic and created URL/application policies, including whitelist and blocking requirements.",
      "Managed DNS security activities including A, CNAME and MX records using Infoblox.",
      "Analyzed firewall compliance reports and supported security-policy fine tuning.",
      "Configured network deception decoys and investigated honeypot activity to identify and remediate suspicious threats.",
      "Prepared weekly and monthly operational reports covering security risks, key indicators and incident trends."
    ]},
    { company: "Integrated Personnel Service", role: "Technical Support Executive", period: "May 2019 – Apr 2020", points: [
      "Troubleshot endpoint security agents and resolved technical issues affecting customer environments.",
      "Investigated endpoint, network and application-related support issues and maintained technical support records.",
      "Maintained infrastructure and disaster-recovery server records and performed preventive maintenance.",
      "Troubleshot customer LAN and infrastructure issues and assisted with security software implementation."
    ]}
  ],
  tech: [
    ["SIEM", "DNIF; Microsoft Sentinel"],
    ["DLP / UEBA", "Forcepoint"],
    ["EDR / Endpoint", "FireEye; Microsoft Defender; Microsoft Defender for Cloud; Trend Micro EPP"],
    ["Email Security", "Trend Micro IMSVA; DDEI"],
    ["Vulnerability Assessment", "Qualys; Tenable"],
    ["Proxy / DNS", "Websense; Infoblox"],
    ["Network Security", "Firewall; IPS; WAF; Zscaler"],
    ["Operating Systems", "Linux; Windows"]
  ],
  certs: [
    "Certified Ethical Hacker (CEH v11) — EC-Council",
    "Certified Network Security Specialist (CNSS) — ICSI",
    "NSE 3 — Fortinet",
    "CCNA (Routing & Switching) — Training"
  ],
  education: [
    { degree: "Master of Science — Cyber Forensics & Information Security", school: "University of Madras, Chennai", note: "2024" },
    { degree: "Bachelor of Engineering — Electronics & Communication Engineering", school: "Apollo Engineering College, Chennai", note: "2018" }
  ],
  strengths: ["Analytical Problem Solving", "Technical Troubleshooting", "Security Research", "Process Improvement", "Team Collaboration", "Vendor Coordination", "Technical Communication", "Continuous Learning"]
};
/* ============================================================ */

(function(){
  var $=function(i){return document.getElementById(i)};
  var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})};
  var D=DATA, tel=function(p){return "tel:"+p.replace(/[^+\d]/g,"")};
  document.title=D.name+" — Security Engineer Portfolio";
  $("brand").textContent="🔒 "+D.name;
  $("fn").textContent=D.firstName; $("title").textContent=D.title;
  $("lead").textContent=D.summary.split(". ")[0]+"."; $("sum").textContent=D.summary; $("cnote").textContent=D.contactNote;
  $("ini").textContent=D.initials;
  $("badges").innerHTML=D.badges.map(function(b){return '<span class="badge">'+esc(b)+'</span>'}).join("");
  var mail='<a href="mailto:'+esc(D.email)+'">'+esc(D.email)+'</a>';
  var phones=D.phones.map(function(p){return '<a href="'+tel(p)+'">'+esc(p)+'</a>'}).join("<br>");
  $("meta").innerHTML='<div><strong>Location</strong><br>'+esc(D.location)+'</div><div><strong>Phone</strong><br>'+phones+'</div><div><strong>Email</strong><br>'+mail+'</div>';
  $("comp").innerHTML=D.competencies.map(function(c){return '<div class="box"><h4>'+esc(c.name)+'</h4><p>'+esc(c.desc)+'</p></div>'}).join("");
  $("tech").innerHTML=D.tech.map(function(t){return '<div><b>'+esc(t[0])+'</b><span>'+esc(t[1])+'</span></div>'}).join("");
  $("exp").innerHTML=D.experience.map(function(j){return '<div class="job"><div class="job-head"><h4>'+esc(j.role)+' · <span class="co">'+esc(j.company)+'</span></h4><span class="when">'+esc(j.period)+'</span></div><ul>'+j.points.map(function(p){return "<li>"+esc(p)+"</li>"}).join("")+'</ul></div>'}).join("");
  $("certList").innerHTML=D.certs.map(function(c){return "<li>"+esc(c)+"</li>"}).join("");
  $("edu").innerHTML=D.education.map(function(e){return '<div class="edu"><strong>'+esc(e.degree)+'</strong><br>'+esc(e.school)+' · '+esc(e.note)+'</div>'}).join("");
  $("str").innerHTML=D.strengths.map(function(s){return '<span class="badge">'+esc(s)+'</span>'}).join("");
  var cg='<div><strong>Email</strong><br>'+mail+'</div><div><strong>Phone</strong><br>'+phones+'</div><div><strong>Location</strong><br>'+esc(D.location)+'</div>';
  if(D.linkedin)cg+='<div><strong>LinkedIn</strong><br><a href="'+esc(D.linkedin)+'" target="_blank" rel="noopener">Profile</a></div>';
  if(D.github)cg+='<div><strong>GitHub</strong><br><a href="'+esc(D.github)+'" target="_blank" rel="noopener">Repo</a></div>';
  $("cgrid").innerHTML=cg;
  $("foot").textContent="© "+D.name+" • Built with ♥ • Designed for security-focused presentation";

  var c=$("matrix"),x=c.getContext("2d"),fs=14,cols,drops,chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()[]{}<>?/\\|~+=-_";
  function size(){c.width=innerWidth;c.height=innerHeight;cols=Math.floor(c.width/fs);drops=[];for(var i=0;i<cols;i++)drops[i]=Math.random()*-50|0;x.fillStyle="#020604";x.fillRect(0,0,c.width,c.height)}
  size();addEventListener("resize",size);
  function draw(){
    x.fillStyle="rgba(2,6,4,.08)";x.fillRect(0,0,c.width,c.height);
    x.font=fs+"px monospace";
    for(var i=0;i<cols;i++){
      var t=chars.charAt(Math.random()*chars.length|0);
      x.fillStyle=Math.random()>.93?"#00ff88":"rgba(0,200,100,.45)";
      x.fillText(t,i*fs,drops[i]*fs);
      if(drops[i]*fs>c.height&&Math.random()>.975)drops[i]=0;
      drops[i]++;
    }
  }
  if(!matchMedia("(prefers-reduced-motion: reduce)").matches)setInterval(draw,55);
})();
