import {
  Copyright,
  FileCheck,
  Shield,
  Fingerprint,
  AlertTriangle,
  RefreshCw,
  Building2,
  FileSearch,
  UserCheck,
  Search,
  Lock,
  GraduationCap,
  Scale
} from 'lucide-react';

export interface ServiceDetail {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon: any;
  keyComponents?: {
    title: string;
    items: string[];
  }[];
  features?: string[];
  methodology?: {
    step: string;
    description: string;
  }[];
  benefits?: string[];
  targetAudience?: string[];
  faq?: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: 'ipr-investigations',
    title: 'Intellectual Property Rights (IPR) Investigations',
    shortDescription: 'Preserving Brand Equity | Defending Innovation | Enabling Legal Protection.',
    fullDescription: 'At FICS, we view intellectual property (IP) as a strategic asset that drives growth, fosters innovation, and secures brand identity in competitive markets. Our IPR Investigation Services are designed to address a broad spectrum of challenges related to infringement, misuse, and unauthorized exploitation of IP assets. These services are applicable across industries, including fashion, pharmaceuticals, software, manufacturing, media, and consumer goods.',
    image: '/assets/images/services/ipr-investigations.jpg',
    icon: Copyright,
    keyComponents: [
      {
        title: 'Trademark Infringement',
        items: [
          'Investigating unauthorized usage of logos, labels, packaging, and product design.',
          'Marketplace surveillance (physical and online).',
          'Evidence collection through test purchases and photographic documentation.'
        ]
      },
      {
        title: 'Copyright Violation',
        items: [
          'Detecting illegal reproduction of books, music, digital media, software, and designs.',
          'Use of automated web crawling tools for piracy detection.',
          'Takedown requests and legal support for enforcement actions.'
        ]
      },
      {
        title: 'Patent Violation',
        items: [
          'Technical comparison and validation of suspected patent breaches.',
          'Investigations into competitive products for infringement of patented components or processes.',
          'Support in IP litigation and patent enforcement actions.'
        ]
      },
      {
        title: 'Anti-Counterfeiting Campaigns',
        items: [
          'Identification and mapping of counterfeit distribution networks.',
          'Raids, seizures, and vendor investigations in collaboration with enforcement bodies.',
          'Collection of physical evidence, including counterfeit goods.'
        ]
      },
      {
        title: 'Online Brand Protection',
        items: [
          'Continuous monitoring of e-commerce platforms, social media, and websites.',
          'Domain abuse and brand impersonation tracking.',
          'Cyber forensics to trace the source of infringing content.'
        ]
      },
      {
        title: 'Vendor and Supply Chain Integrity Checks',
        items: [
          'Surveillance of third-party manufacturers, distributors, and licensees.',
          'Compliance audits for IP contractual obligations.',
          'Tracing of parallel trade or surplus unauthorized production.'
        ]
      }
    ],
    methodology: [
      { step: 'Consultation & Discovery', description: 'Understanding the client’s IP portfolio and the nature of the suspected infringement.' },
      { step: 'Intelligence Gathering', description: 'Deploying online surveillance and physical reconnaissance to identify infringers.' },
      { step: 'Evidence Collection', description: 'Conducting test purchases, sample analysis, and documenting proof of violation.' },
      { step: 'Enforcement Action', description: 'Coordinating with law enforcement for raids or providing evidence for legal notices.' },
      { step: 'Reporting & Prevention', description: 'Delivering a comprehensive report and recommending strategies to prevent future breaches.' }
    ],
    benefits: [
      'Protect market share and revenue from counterfeit competition.',
      'Maintain brand reputation and consumer trust.',
      'Secure legal evidence for effective litigation and damages recovery.',
      'Deter potential infringers through visible enforcement.'
    ],
    targetAudience: ['Fashion Brands', 'Pharmaceutical Companies', 'Software Developers', 'Manufacturing Firms', 'Media & Entertainment']
  },
  {
    slug: 'document-examination-verification',
    title: 'Document Examination and Verification',
    shortDescription: 'Authenticate and validate critical records using advanced forensic techniques.',
    fullDescription: 'Our Document Examination and Verification services help authenticate and validate critical records. We use advanced forensic techniques and specialized tools to identify alterations, confirm authenticity, and provide expert reports to support legal, corporate, and investigative needs.',
    image: '/assets/images/services/document-examination.jpg',
    icon: FileCheck,
    features: [
      'Handwriting and Signature Verification',
      'Detection of Forged or Altered Documents',
      'Ink and Paper Analysis',
      'Examination of Security Features (watermarks, holograms, seals)',
      'Verification of Official Certificates and Legal Documents',
      'Detection of Counterfeit Documents'
    ],
    methodology: [
      { step: 'Initial Assessment', description: 'Visual inspection of the questioned document to identify obvious anomalies.' },
      { step: 'Detailed Analysis', description: 'Using microscopy, VSC (Video Spectral Comparators), and other non-destructive tools to examine ink, paper, and indentations.' },
      { step: 'Comparison', description: 'Comparing questioned handwriting or features against known genuine standards.' },
      { step: 'Opinion Formulation', description: 'Synthesizing findings into a conclusive expert opinion based on scientific principles.' }
    ],
    benefits: [
      'Prevent fraud by detecting forged contracts, wills, and financial instruments.',
      'Support legal cases with admissible expert testimony.',
      'Verify the authenticity of educational and professional certificates.',
      'Protect assets from claims based on altered documents.'
    ],
    targetAudience: ['Law Firms', 'Banks & Financial Institutions', 'Corporate HR Departments', 'Government Agencies', 'Real Estate Agencies']
  },
  {
    slug: 'cyber-forensics',
    title: 'Cyber Forensics',
    shortDescription: 'Uncover critical digital evidence from laptops, mobiles, and networks.',
    fullDescription: 'Our cyber forensic services help uncover critical digital evidence utilizing advanced tools and methodologies to extract and analyze digital evidence for legal proceedings.',
    image: '/assets/images/services/cyber-forensics.jpg',
    icon: Shield,
    features: [
      'Forensic Examination of a Laptop',
      'Mobile Forensic Investigations',
      'Email Forensics Investigation',
      'Data Recovery',
      'Network Forensics',
      'Collection of digital evidence from the Crime scene'
    ],
    methodology: [
      { step: 'Identification', description: 'Identifying potential sources of digital evidence (devices, cloud storage, logs).' },
      { step: 'Preservation', description: 'Creating bit-for-bit forensic images to ensure data integrity and prevent alteration.' },
      { step: 'Analysis', description: 'Using specialized software to recover deleted files, analyze logs, and reconstruct timelines.' },
      { step: 'Reporting', description: 'Documenting findings in a clear, court-admissible format that explains technical details to non-technical audiences.' }
    ],
    benefits: [
      'Recover lost or deleted data critical to investigations.',
      'Prove or disprove claims of digital misconduct (e.g., data theft, unauthorized access).',
      'Identify the source and scope of a security breach.',
      'Ensure evidence is handled with a strict chain of custody for legal validity.'
    ],
    targetAudience: ['Corporations', 'Law Enforcement agencies', 'Legal Consultants', 'Private Individuals', 'Cybersecurity Firms']
  },
  {
    slug: 'fingerprint-examination',
    title: 'Fingerprint Examination',
    shortDescription: 'Identify individuals and link evidence to crime scenes with high accuracy.',
    fullDescription: 'Our Fingerprint Examination services help identify individuals and link evidence to crime scenes. We use advanced forensic methods and high-resolution analysis tools to accurately match fingerprints, strengthen investigations, and support legal, corporate, and security requirements.',
    image: '/assets/images/services/fingerprint-examination.jpg',
    icon: Fingerprint,
    features: [
      'Latent Fingerprint Detection and Lifting',
      'Matching Fingerprints with National and International Databases',
      'Analysis of Partial or Smudged Prints',
      'Verification of Fingerprints for Identity Confirmation',
      'Development of Prints from Various Surfaces',
      'Expert Testimony in Legal Proceedings'
    ],
    methodology: [
      { step: 'Detection', description: 'Using physical (powder) and chemical (ninhydrin, cyanoacrylate) methods to visualize latent prints.' },
      { step: 'Enhancement', description: 'Digital enhancement of lifted prints to improve ridge detail and clarity.' },
      { step: 'Analysis (ACE-V)', description: 'Analysis, Comparison, Evaluation, and Verification of the prints against known samples.' },
      { step: 'Reporting', description: 'Providing a conclusive report stating match, no match, or inconclusive results.' }
    ],
    benefits: [
      'Irrefutable identification of specialized individuals.',
      'Link suspects to specific locations or objects.',
      'Exonerate innocent parties through exclusion.',
      'Support criminal and civil litigation with scientific evidence.'
    ],
    targetAudience: ['Law Enforcement', 'Private Investigators', 'Corporate Security', 'Legal Defense Teams']
  },
  {
    slug: 'cyber-crime-investigation',
    title: 'Cyber Crime Investigation',
    shortDescription: 'Specialized investigations for cyber-related offenses and online criminal activities.',
    fullDescription: 'We provide specialized investigations for cyber-related offenses. We identify, investigate, and resolve cybercrimes that involve financial fraud, identity theft, harassment, and other forms of online criminal activities.',
    image: '/assets/images/services/cyber-crime.jpg',
    icon: AlertTriangle,
    features: [
      'Social Media Investigations',
      'Blackmail Investigations',
      'Ransomware & Malware Investigations',
      'Cyberbullying Investigations',
      'Identity theft',
      'Financial Fraud Investigations',
      'Online Defamation Investigations'
    ],
    methodology: [
      { step: 'Complaint Assessment', description: 'Analyzing the victim’s report and initial evidence.' },
      { step: 'Digital Tracing', description: 'Tracking IP addresses, email headers, and digital footprints to locate the perpetrator.' },
      { step: 'Social Engineering Analysis', description: 'Identifying the psychological tactics used (e.g., phishing, pretexting).' },
      { step: 'Evidence Consolidation', description: 'Compiling all digital traces into a dossier for legal action.' }
    ],
    benefits: [
      'Identify anonymous online harassers or fraudsters.',
      'Stop ongoing cyber attacks and mitigate damage.',
      'Recover compromised accounts and assets where possible.',
      'Provide peace of mind and closure to victims.'
    ],
    targetAudience: ['Individuals (Harassment/Fraud victims)', 'Corporations (Data Breach/CEO Fraud)', 'Educational Institutions', 'Celebrities/Public Figures']
  },
  {
    slug: 'incident-response',
    title: 'Cyber Crime Incident Response',
    shortDescription: 'Rapid action and resolution for cyber incidents using DFIR IRIS system.',
    fullDescription: 'Our incident response services ensure rapid action and resolution for cyber incidents. We utilize our DFIR IRIS system for efficient case management, task delegation, and alert analysis, providing a structured and effective response to mitigate damage and protect your assets.',
    image: '/assets/images/services/incident-response-v3.jpg',
    icon: RefreshCw,
    features: [
      'Internal Breaches',
      'External Attacks',
      'Complex Threat Investigations'
    ],
    methodology: [
      { step: 'Preparation', description: 'Establishing response protocols and lines of communication before an incident occurring.' },
      { step: 'Identification', description: 'Detecting the incident, determining its scope, and identifying the threat actor.' },
      { step: 'Containment', description: 'Isolating affected systems to prevent further spread of the attack.' },
      { step: 'Eradication & Recovery', description: 'Removing the threat (malware, backdoors) and restoring systems to normal operation.' },
      { step: 'Lessons Learned', description: 'Post-incident analysis to improve future security posture.' }
    ],
    benefits: [
      'Minimize downtime and financial loss from cyber attacks.',
      'Prevent data exfiltration and reputational damage.',
      'Ensure regulatory compliance (e.g., notification requirements).',
      'Strengthen defenses against future attacks.'
    ],
    targetAudience: ['Enterprises', 'SMEs', 'E-commerce Platforms', 'Financial Services']
  },
  {
    slug: 'corporate-investigations',
    title: 'Corporate Investigations',
    shortDescription: 'Identifying and addressing misconduct, fraud, and espionage within businesses.',
    fullDescription: 'Our corporate investigations focus on identifying and addressing misconduct within businesses. We also investigate corporate espionage, employee misconduct, and business partner fraud, helping to protect businesses and their intellectual property from both internal and external threats.',
    image: '/assets/images/services/corporate-investigations.jpg',
    icon: Building2,
    features: [
      'Internal & External Fraud',
      'Corporate espionage',
      'Intellectual Property Protection',
      'Brand Protection',
      'Infringement of Patents, Trademarks, and Copyrights',
      'Online Vulnerability Assessments'
    ],
    methodology: [
      { step: 'Strategic Planning', description: 'Defining the scope, objectives, and legal boundaries of the investigation.' },
      { step: 'Data Mining', description: 'Reviewing communications, financial records, and access logs.' },
      { step: 'Interviews', description: 'Conducting discreet interviews with employees and associated parties.' },
      { step: 'Analysis & Report', description: 'Correlating findings to build a clear picture of the misconduct.' }
    ],
    benefits: [
      'Root out internal corruption and conflict of interest.',
      'Protect trade secrets and sensitive intellectual property.',
      'Ensure a safe and compliant workplace environment.',
      'Mitigate risks associated with rogue employees.'
    ],
    targetAudience: ['Board of Directors', 'HR Departments', 'Legal Counsel', 'Compliance Officers']
  },
  {
    slug: 'forensic-audit',
    title: 'Forensic Audit',
    shortDescription: 'Uncover financial fraud, discrepancies, and ensure compliance.',
    fullDescription: 'Our forensic audit services are designed to uncover financial fraud and ensure compliance. We also investigate discrepancies in accounting records, trace illicit financial activities, and ensure accurate reporting.',
    image: '/assets/images/services/forensic-audit.jpg',
    icon: FileSearch,
    features: [
      'Financial Statement Fraud',
      'Omission of Transactions (revenue or expenses)',
      'Non-disclosure of Relevant Information',
      'Violation of Financial Reporting Standards'
    ],
    methodology: [
      { step: 'Risk Assessment', description: 'Identifying areas with high risk of fraud or material misstatement.' },
      { step: 'Data Analysis', description: 'Using CAATS (Computer Assisted Audit Techniques) to spot anomalies in large datasets.' },
      { step: 'Testing & Verification', description: 'Tracing transactions to source documents and verifying their legitimacy.' },
      { step: 'Fraud Reporting', description: 'Presenting findings quantifying the loss and identifying the methodology of fraud.' }
    ],
    benefits: [
      'Detect and quantify financial loss due to fraud.',
      'Restore stakeholder confidence in financial reporting.',
      'Identify control weaknesses and recommend improvements.',
      'Support litigation for asset recovery.'
    ],
    targetAudience: ['Shareholders', 'Investors', 'Regulatory Bodies', 'Banks']
  },
  {
    slug: 'background-verification',
    title: 'Background Verification',
    shortDescription: 'Comprehensive verification services to mitigate risks in recruitment and partnerships.',
    fullDescription: 'We offer comprehensive background verification services to mitigate risks in recruitment and partnerships. Our services help businesses make informed hiring decisions and verify the integrity of individuals or companies involved in partnerships or acquisitions.',
    image: '/assets/images/services/background-verification.jpg',
    icon: UserCheck,
    features: [
      'Educational Checks',
      'Address Verification',
      'Previous Employment Checks',
      'Criminal Record Checks',
      'Social Media Profiling'
    ],
    methodology: [
      { step: 'Data Collection', description: 'Gathering candidate details and consent.' },
      { step: 'Source Verification', description: 'Contacting universities, past employers, and checking official records directly.' },
      { step: 'Database Checks', description: 'Screening against criminal databases and global watchlists.' },
      { step: 'Report Generation', description: 'Compiling a verified profile highlighting any discrepancies (red flags).' }
    ],
    benefits: [
      'Ensure a safe hiring environment.',
      'Verify the credentials and competence of potential hires.',
      'Reduce the risk of internal fraud and negligent hiring lawsuits.',
      'Make informed decisions on business partnerships.'
    ],
    targetAudience: ['HR Managers', 'Recruitment Agencies', 'Venture Capitalists', 'Tenant Screening Services']
  },
  {
    slug: 'due-diligence-investigations',
    title: 'Due Diligence Investigations',
    shortDescription: 'Thorough evaluation of financial, legal, and reputational risks.',
    fullDescription: 'Our due diligence investigations help clients make informed decisions by thoroughly evaluating financial, legal, and reputational risks. We conduct background checks and detailed investigations into potential acquisitions, partnerships, or investments, ensuring clients understand all risks before proceeding.',
    image: '/assets/images/services/due-diligence.jpg',
    icon: Search,
    features: [
      'Financial Investigations',
      'Business Risk Assessment',
      'Market and Competitor Analysis'
    ],
    methodology: [
      { step: 'Scope Definition', description: 'Identify key areas of concern (e.g., financial health, legal history).' },
      { step: 'Information Gathering', description: 'Accessing public records, proprietary databases, and conducting field inquiries.' },
      { step: 'Analysis', description: 'Evaluating the gathered data for inconsistencies, hidden liabilities, or reputational risks.' },
      { step: 'Reporting', description: 'Providing a risk rating and executive summary to guide decision-making.' }
    ],
    benefits: [
      'Avoid bad investments and toxic partnerships.',
      'Uncover hidden liabilities and lawsuits.',
      'Verify the legitimacy of business claims.',
      'Negotiate better terms based on factual intelligence.'
    ],
    targetAudience: ['Investors', 'Mergers & Acquisitions Teams', 'Legal Firms', 'Corporate Executives']
  },
  {
    slug: 'cybersecurity-services',
    title: 'Cybersecurity Services',
    shortDescription: 'Protect businesses from potential threats like VAPT, Red/Blue teaming.',
    fullDescription: 'Our cybersecurity services protect businesses from potential threats and vulnerabilities.',
    image: '/assets/images/services/cybersecurity.jpg',
    icon: Lock,
    features: [
      'VAPT (Vulnerability Assessment and Penetration Testing)',
      'Red Team Testing',
      'Blue teaming',
      'Purple teaming',
      'Network Security testing',
      'ERP Audit',
      'Web & Mobile Application Security Assessments',
      'Security Risk Assessment & Mitigation'
    ],
    methodology: [
      { step: 'Reconnaissance', description: 'Gathering information about the target system to identify potential entry points.' },
      { step: 'Scanning & Enumeration', description: 'Using automated tools to find open ports and known vulnerabilities.' },
      { step: 'Exploitation (Testing)', description: 'Attempting to exploit vulnerabilities safely to verify their severity.' },
      { step: 'Reporting & Remediation', description: 'Detailed technical report with proof of concept and remediation steps.' }
    ],
    benefits: [
      'Proactively identify and fix security weaknesses.',
      'Comply with industry regulations (GDPR, PCI-DSS, ISO 27001).',
      'Protect customer data and intellectual property.',
      'Ensure business continuity and resilience.'
    ],
    targetAudience: ['IT Managers', 'CTOs/CISOs', 'Any business with an online presence']
  },
  {
    slug: 'workshops',
    title: 'Forensic and Cyber Security Workshops',
    shortDescription: 'Educating students and caregivers about global cyber scams and POCSO Act.',
    fullDescription: 'We conduct workshops to educate students, teachers, and caregivers about global cyber scams and the POCSO Act 2012, empowering them to recognize and prevent cyber threats.',
    image: '/assets/images/services/workshops.jpg',
    icon: GraduationCap,
    features: [
      'Awareness about Global Cyber Scams',
      'POCSO Act 2012 Education',
      'Threat Recognition and Prevention',
      'Digital Safety for Students and Caregivers'
    ],
    methodology: [
      { step: 'Needs Assessment', description: 'Tailoring the curriculum to the age group and technical level of the audience.' },
      { step: 'Interactive Sessions', description: 'Using live demos, real-world case studies, and gamified learning.' },
      { step: 'Practical Training', description: 'Hands-on exercises on identifying phishing, securing devices, and reporting crimes.' },
      { step: 'Q&A and Resources', description: 'Open floor for questions and distribution of safety checklists.' }
    ],
    benefits: [
      'Empower participants to stay safe online.',
      'Reduce the risk of cyberbullying and exploitation for children.',
      'Create a culture of cybersecurity awareness in schools and organizations.',
      'Understanding legal rights and remedies.'
    ],
    targetAudience: ['Schools', 'Colleges', 'Parent-Teacher Associations', 'NGOs']
  },
  {
    slug: 'expert-testimony-legal-support',
    title: 'Expert Testimony & Legal Support',
    shortDescription: 'Professional opinions, analysis, and evidence presentation for court.',
    fullDescription: 'We provide expert testimony services in court for various forensic investigations, offering professional opinions, analysis, and evidence presentation. Our forensic experts support clients during litigation by ensuring that forensic findings are accurately interpreted and presented.',
    image: '/assets/images/services/expert-testimony.jpg',
    icon: Scale,
    features: [
      'Section 329, Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023',
      'Section 59, Bharatiya Sakshya Adhiniyam (BSA), 2023',
      'Section 39(1) of the Bharatiya Sakshya Adhiniyam (BSA), 2023'
    ],
    methodology: [
      { step: 'Review of Evidence', description: 'Thorough analysis of the forensic reports and underlying data.' },
      { step: 'Pre-Trial Preparation', description: 'Consulting with legal counsel to clarify technical concepts.' },
      { step: 'Depostion/Testimony', description: 'Presenting findings clearly and objectively in court.' },
      { step: 'Cross-Examination Support', description: 'Defending the methodology and conclusions against scrutiny.' }
    ],
    benefits: [
      'Translate complex technical findings into clear legal arguments.',
      'Enhance the credibility of the evidence presented.',
      'Ensure strict adherence to current legal statutes (BNSS, BSA).',
      'Increase the likelihood of a favorable legal outcome.'
    ],
    targetAudience: ['Law Firms', 'Legal Departments', 'Government Prosecutors', 'Defense Attorneys']
  }
];
