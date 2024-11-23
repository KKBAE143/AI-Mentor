export default [
    {
        name: 'Emotional Intelligence Scenario Generator',
        desc: 'Creates realistic scenarios to practice emotional intelligence skills.',
        category: 'Soft Skills',
        icon: 'https://cdn-icons-png.flaticon.com/128/3997/3997872.png',
        aiPrompt: 'Generate {scenarioCount} realistic workplace scenarios that test emotional intelligence in the context of {situation} (e.g., conflict resolution, giving feedback, team dynamics). For each scenario, provide: 1) The detailed situation, 2) Key emotional challenges involved, 3) Multiple response options with analysis of their emotional impact, 4) Best practices for handling the emotions involved, 5) Reflection questions for emotional awareness development.',
        slug: 'ei-scenario-generator',
        form: [
            {
                label: 'Type of situation',
                field: 'input',
                name: 'situation',
                options: ['Conflict Resolution', 'Giving Feedback', 'Team Dynamics', 'Leadership Challenges', 'Client Interactions'],
                required: true,
                placeholder: 'e.g., Conflict Resolution',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Number of scenarios',
                field: 'input',
                name: 'scenarioCount',
                type: 'number',
                required: true,
                placeholder: 'e.g., 3',
                style: 'color: grey; font-style: italic;'
            }
        ]
    },
    {
        name: 'Communication Style Analyzer',
        desc: 'Analyzes and improves communication patterns for better interpersonal effectiveness.',
        category: 'Soft Skills',
        icon: 'https://cdn-icons-png.flaticon.com/128/2665/2665632.png',
        aiPrompt: 'Analyze the provided communication sample: "{communicationSample}" in the context of {context}. Consider: 1) Communication style (assertive, passive, aggressive), 2) Tone and word choice, 3) Non-verbal elements mentioned, 4) Cultural sensitivity, 5) Emotional intelligence markers. Provide specific recommendations for improvement, alternative phrasings, and exercises to develop better communication habits.',
        slug: 'communication-analyzer',
        form: [
            {
                label: 'Paste your communication sample',
                field: 'input',
                name: 'communicationSample',
                required: true,
                placeholder: 'e.g., an email, conversation, or presentation script',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Communication context',
                field: 'input',
                name: 'context',
                options: ['Professional Email', 'Team Meeting', 'Client Presentation', 'Conflict Resolution', 'Performance Review'],
                required: true,
                placeholder: 'Select a context',
                style: 'color: grey; font-style: italic;'
            }
        ]
    },
    {
        name: 'Leadership Development Simulator',
        desc: 'Creates personalized leadership development scenarios and exercises.',
        category: 'Soft Skills',
        icon: 'https://cdn-icons-png.flaticon.com/128/3176/3176390.png',
        aiPrompt: `Create a leadership development plan based on the following inputs:
        1) Current leadership style: {leadershipStyle}
        2) Key challenges: {challenges}
        3) Team context: {teamContext}
        4) Development goals: {goals}
        
        Generate a comprehensive plan including:
        1) Personalized scenarios for practicing leadership skills
        2) Reflection exercises for leadership awareness
        3) Communication templates for common leadership situations
        4) Team-building activities aligned with development goals
        5) Metrics for tracking leadership growth
        6) Resources for deeper learning in specific areas`,
        slug: 'leadership-simulator',
        form: [
            {
                label: 'Your leadership style',
                field: 'input',
                name: 'leadershipStyle',
                options: ['Democratic', 'Authoritative', 'Coaching', 'Affiliative', 'Pacesetting', 'Commanding'],
                required: true,
                placeholder: 'Select your leadership style',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Current leadership challenges',
                field: 'input',
                name: 'challenges',
                required: true,
                placeholder: 'e.g., Delegating effectively, Building trust, Managing conflict',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Team context',
                field: 'input',
                name: 'teamContext',
                required: true,
                placeholder: 'e.g., Remote team of 8, mixed experience levels',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Development goals',
                field: 'input',
                name: 'goals',
                required: true,
                placeholder: 'e.g., Improve active listening, Develop strategic thinking',
                style: 'color: grey; font-style: italic;'
            }
        ]
    },
    {
        name: 'Adaptability Challenge Generator',
        desc: 'Creates scenarios to practice and develop adaptability skills.',
        category: 'Soft Skills',
        icon: 'https://cdn-icons-png.flaticon.com/128/4088/4088920.png',
        aiPrompt: `Generate {scenarioCount} workplace change scenarios based on the context: {workContext}. For each scenario:
        1) Describe an unexpected change or challenge
        2) Outline potential impacts and stakeholders
        3) Provide multiple adaptation strategies
        4) Include decision-making frameworks
        5) Suggest metrics for measuring adaptability success
        6) Create reflection questions for learning from the experience`,
        slug: 'adaptability-challenges',
        form: [
            {
                label: 'Work Context',
                field: 'input',
                name: 'workContext',
                options: ['Remote Work', 'Team Restructuring', 'Technology Change', 'Process Changes', 'Market Shifts'],
                required: true,
                placeholder: 'Select a work context',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Number of Scenarios',
                field: 'input',
                name: 'scenarioCount',
                type: 'number',
                required: true,
                placeholder: 'e.g., 3',
                style: 'color: grey; font-style: italic;'
            }
        ]
    },
    {
        name: 'Cultural Intelligence Builder',
        desc: 'Develops cross-cultural communication and understanding skills.',
        category: 'Soft Skills',
        icon: 'https://cdn-icons-png.flaticon.com/128/9795/9795849.png',
        aiPrompt: `Create a cultural intelligence development plan for working with {targetCulture} culture in a {businessContext} setting. Include:
        1) Key cultural values and business practices
        2) Communication style differences
        3) Decision-making and hierarchy expectations
        4) Relationship-building strategies
        5) Common misunderstandings and how to avoid them
        6) Practice scenarios for cross-cultural interactions
        7) Cultural sensitivity self-assessment tools`,
        slug: 'cultural-intelligence',
        form: [
            {
                label: 'Target Culture',
                field: 'input',
                name: 'targetCulture',
                required: true,
                placeholder: 'e.g., Japanese, Brazilian, German',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Business Context',
                field: 'input',
                name: 'businessContext',
                options: ['Negotiations', 'Team Management', 'Client Relations', 'Project Collaboration', 'Business Development'],
                required: true,
                placeholder: 'Select a business context',
                style: 'color: grey; font-style: italic;'
            }
        ]
    },
    {
        name: 'Networking Strategy Designer',
        desc: 'Creates personalized networking plans and conversation starters.',
        category: 'Soft Skills',
        icon: 'https://cdn-icons-png.flaticon.com/128/1256/1256650.png',
        aiPrompt: `Develop a networking strategy for {eventType} events in the {industry} industry. Consider the participant's {networkingStyle} networking style. Include:
        1) Pre-event preparation checklist
        2) Custom conversation starters and questions
        3) Active listening prompts
        4) Follow-up templates and timelines
        5) Relationship nurturing strategies
        6) Digital networking integration
        7) Success metrics and goals`,
        slug: 'networking-strategy',
        form: [
            {
                label: 'Event Type',
                field: 'input',
                name: 'eventType',
                options: ['Industry Conference', 'Professional Meetup', 'Virtual Networking', 'Alumni Events', 'Trade Shows'],
                required: true,
                placeholder: 'Select event type',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Industry',
                field: 'input',
                name: 'industry',
                required: true,
                placeholder: 'e.g., Tech, Finance, Healthcare',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Your Networking Style',
                field: 'input',
                name: 'networkingStyle',
                options: ['Introvert', 'Extrovert', 'Ambivert'],
                required: true,
                placeholder: 'Select your networking style',
                style: 'color: grey; font-style: italic;'
            }
        ]
    },
    {
        name: 'Conflict Resolution Simulator',
        desc: 'Generates and analyzes workplace conflict scenarios.',
        category: 'Soft Skills',
        icon: 'https://cdn-icons-png.flaticon.com/128/4133/4133589.png',
        aiPrompt: `Create a detailed conflict resolution scenario based on {conflictType} in a {workplaceContext} setting. Provide:
        1) Detailed situation description
        2) Stakeholder analysis and perspectives
        3) Emotional dynamics assessment
        4) Multiple resolution approaches
        5) Communication scripts and templates
        6) Mediation strategies
        7) Follow-up and relationship repair plans`,
        slug: 'conflict-resolution',
        form: [
            {
                label: 'Type of Conflict',
                field: 'input',
                name: 'conflictType',
                options: ['Resource Allocation', 'Communication Style', 'Work Style Differences', 'Role Clarity', 'Project Priorities'],
                required: true,
                placeholder: 'Select type of conflict',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Workplace Context',
                field: 'input',
                name: 'workplaceContext',
                options: ['Remote Team', 'Cross-functional Project', 'Matrix Organization', 'Startup Environment', 'Corporate Setting'],
                required: true,
                placeholder: 'Select a workplace context',
                style: 'color: grey; font-style: italic;'
            }
        ]
    },
    {
        name: 'Professional Presence Enhancer',
        desc: 'Develops executive presence and professional image.',
        category: 'Soft Skills',
        icon: 'https://cdn-icons-png.flaticon.com/128/3048/3048127.png',
        aiPrompt: `Create a professional presence development plan for {roleLevel} in {industryType}. Include:
        1) Communication style assessment and improvements
        2) Body language optimization
        3) Personal branding strategy
        4) Presentation skills enhancement
        5) Professional image guidelines
        6) Confidence-building exercises
        7) Situation-specific protocols`,
        slug: 'professional-presence',
        form: [
            {
                label: 'Role Level',
                field: 'input',
                name: 'roleLevel',
                options: ['Entry Level', 'Middle Management', 'Senior Executive', 'Client-Facing Professional', 'Team Leader'],
                required: true,
                placeholder: 'Select your role level',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Industry Type',
                field: 'input',
                name: 'industryType',
                required: true,
                placeholder: 'e.g., Consulting, Technology, Finance',
                style: 'color: grey; font-style: italic;'
            }
        ]
    },
    {
        name: 'Team Collaboration Optimizer',
        desc: 'Enhances team dynamics and collaborative skills.',
        category: 'Soft Skills',
        icon: 'https://cdn-icons-png.flaticon.com/128/1534/1534938.png',
        aiPrompt: `Design a team collaboration enhancement plan for a {teamType} team with {teamSize} members. Address:
        1) Team communication patterns
        2) Role clarity and responsibilities
        3) Decision-making processes
        4) Trust-building activities
        5) Remote collaboration tools
        6) Conflict prevention strategies
        7) Team performance metrics`,
        slug: 'team-collaboration',
        form: [
            {
                label: 'Team Type',
                field: 'input',
                name: 'teamType',
                options: ['Cross-functional', 'Virtual', 'Project-based', 'Department', 'Global'],
                required: true,
                placeholder: 'Select your team type',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Team Size',
                field: 'input',
                name: 'teamSize',
                type: 'number',
                required: true,
                placeholder: 'e.g., 8',
                style: 'color: grey; font-style: italic;'
            }
        ]
    },
    {
        name: 'Presentation Skills Coach',
        desc: 'Develops effective presentation and public speaking skills.',
        category: 'Soft Skills',
        icon: 'https://cdn-icons-png.flaticon.com/128/1205/1205526.png',
        aiPrompt: `Create a presentation skills development plan for {presentationType} presentations to {audienceType} audiences. Include:
        1) Structure and content organization
        2) Delivery technique improvements
        3) Visual aid best practices
        4) Audience engagement strategies
        5) Handling Q&A sessions
        6) Anxiety management techniques
        7) Practice exercises and feedback tools`,
        slug: 'presentation-coach',
        form: [
            {
                label: 'Presentation Type',
                field: 'input',
                name: 'presentationType',
                options: ['Sales Pitch', 'Technical Presentation', 'Executive Summary', 'Training Session', 'Conference Talk'],
                required: true,
                placeholder: 'Select presentation type',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Audience Type',
                field: 'input',
                name: 'audienceType',
                options: ['Executive Level', 'Technical', 'Mixed', 'Client', 'Internal Team'],
                required: true,
                placeholder: 'Select audience type',
                style: 'color: grey; font-style: italic;'
            }
        ]
    },
    {
        name: 'Time Management Mastery',
        desc: 'Develops effective time management and productivity skills.',
        category: 'Soft Skills',
        icon: 'https://cdn-icons-png.flaticon.com/128/2693/2693507.png',
        aiPrompt: `Create a personalized time management system for a {roleType} role with {workStyle} work pattern. Include:
        1) Priority setting frameworks
        2) Daily/weekly planning templates
        3) Productivity tracking methods
        4) Meeting management strategies
        5) Delegation techniques
        6) Work-life balance guidelines
        7) Energy management tips`,
        slug: 'time-management',
        form: [
            {
                label: 'Role Type',
                field: 'input',
                name: 'roleType',
                options: ['Manager', 'Individual Contributor', 'Freelancer', 'Project Lead', 'Executive'],
                required: true,
                placeholder: 'Select your role type',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Work Style',
                field: 'input',
                name: 'workStyle',
                options: ['Remote', 'Hybrid', 'Office-based', 'Flexible', 'Shift-based'],
                required: true,
                placeholder: 'Select your work style',
                style: 'color: grey; font-style: italic;'
            }
        ]
    },
    {
        name: 'Negotiation Skills Builder',
        desc: 'Develops effective negotiation and influence skills.',
        category: 'Soft Skills',
        icon: 'https://cdn-icons-png.flaticon.com/128/1786/1786971.png',
        aiPrompt: `Create a negotiation skills development plan for {negotiationType} negotiations in {context}. Include:
        1) Preparation checklists
        2) Stakeholder analysis templates
        3) Value proposition frameworks
        4) Communication scripts
        5) Common objection responses
        6) Body language guidelines
        7) Practice scenarios`,
        slug: 'negotiation-skills',
        form: [
            {
                label: 'Negotiation Type',
                field: 'input',
                name: 'negotiationType',
                options: ['Salary', 'Business Deal', 'Client Contract', 'Resource Allocation', 'Conflict Resolution'],
                required: true,
                placeholder: 'Select negotiation type',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Context',
                field: 'input',
                name: 'context',
                options: ['Internal', 'External', 'Cross-cultural', 'High-stakes', 'Collaborative'],
                required: true,
                placeholder: 'Select negotiation context',
                style: 'color: grey; font-style: italic;'
            }
        ]
    },
    {
        name: 'Feedback Mastery System',
        desc: 'Develops skills for giving and receiving effective feedback.',
        category: 'Soft Skills',
        icon: 'https://cdn-icons-png.flaticon.com/128/1584/1584892.png',
        aiPrompt: `Design a feedback skills development program for {feedbackType} feedback in {relationshipContext}. Include:
        1) Feedback structure templates
        2) Delivery techniques
        3) Active listening exercises
        4) Difficult conversation scripts
        5) Non-verbal communication tips
        6) Follow-up strategies
        7) Growth mindset development`,
        slug: 'feedback-mastery',
        form: [
            {
                label: 'Feedback Type',
                field: 'input',
                name: 'feedbackType',
                options: ['Performance Review', 'Peer Feedback', 'Upward Feedback', 'Client Feedback', 'Team Feedback'],
                required: true,
                placeholder: 'Select feedback type',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Relationship Context',
                field: 'input',
                name: 'relationshipContext',
                options: ['Manager-Direct Report', 'Peer-to-Peer', 'Cross-functional', 'Client-Provider', 'Mentor-Mentee'],
                required: true,
                placeholder: 'Select relationship context',
                style: 'color: grey; font-style: italic;'
            }
        ]
    },
    {
        name: 'Problem-Solving Scenario Generator',
        desc: 'Creates complex workplace scenarios to develop problem-solving skills.',
        category: 'Soft Skills',
        icon: 'https://cdn-icons-png.flaticon.com/128/2665/2665632.png',
        aiPrompt: `Generate a detailed problem-solving scenario for a {problemType} situation in a {industryContext} setting. Include:
        1) Scenario background and constraints
        2) Key stakeholder perspectives
        3) Available resources and limitations
        4) Multiple solution pathways
        5) Decision criteria framework
        6) Implementation challenges
        7) Success metrics and evaluation methods
        8) Lessons learned template`,
        slug: 'problem-solving-scenarios',
        form: [
            {
                label: 'Problem Type',
                field: 'input',
                name: 'problemType',
                options: ['Resource Conflict', 'Process Inefficiency', 'Team Dynamic Issues', 'Quality Concerns', 'Strategic Challenges'],
                required: true,
                placeholder: 'Select the type of problem',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Industry Context',
                field: 'input',
                name: 'industryContext',
                options: ['Technology', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Services'],
                required: true,
                placeholder: 'Select industry context',
                style: 'color: grey; font-style: italic;'
            }
        ]
    },
    {
        name: 'Change Management Coach',
        desc: 'Develops skills for managing and adapting to organizational change.',
        category: 'Soft Skills',
        icon: 'https://cdn-icons-png.flaticon.com/128/2787/2787899.png',
        aiPrompt: `Create a change management strategy for {changeType} initiative affecting {teamSize} people. Address:
        1) Stakeholder impact analysis
        2) Resistance management strategies
        3) Communication planning
        4) Training and support needs
        5) Implementation timeline
        6) Success metrics
        7) Risk mitigation strategies
        8) Leadership coaching points`,
        slug: 'change-management',
        form: [
            {
                label: 'Type of Change',
                field: 'input',
                name: 'changeType',
                options: ['Digital Transformation', 'Organizational Restructure', 'Process Change', 'Culture Change', 'System Implementation'],
                required: true,
                placeholder: 'Select the type of change',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Team Size',
                field: 'input',
                name: 'teamSize',
                type: 'number',
                required: true,
                placeholder: 'e.g., 50',
                style: 'color: grey; font-style: italic;'
            }
        ]
    },
    {
        name: 'Cross-Cultural Communication Builder',
        desc: 'Enhances cross-cultural communication and understanding.',
        category: 'Soft Skills',
        icon: 'https://cdn-icons-png.flaticon.com/128/9795/9795849.png',
        aiPrompt: `Develop a cross-cultural communication strategy for working with {culture} colleagues in a {businessSetting} environment. Include:
        1) Cultural value analysis
        2) Communication style differences
        3) Non-verbal communication guide
        4) Business etiquette tips
        5) Conflict resolution approaches
        6) Relationship building strategies
        7) Common pitfalls to avoid
        8) Practice scenarios`,
        slug: 'cross-cultural-comm',
        form: [
            {
                label: 'Target Culture',
                field: 'input',
                name: 'culture',
                required: true,
                placeholder: 'e.g., Japanese, German, Brazilian',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Business Setting',
                field: 'input',
                name: 'businessSetting',
                options: ['Virtual Team', 'Negotiations', 'Project Collaboration', 'Client Relations', 'Team Management'],
                required: true,
                placeholder: 'Select a business setting',
                style: 'color: grey; font-style: italic;'
            }
        ]
    },
    {
        name: 'Resilience Building Simulator',
        desc: 'Develops professional resilience and stress management skills.',
        category: 'Soft Skills',
        icon: 'https://cdn-icons-png.flaticon.com/128/3176/3176390.png',
        aiPrompt: `Create a resilience-building program for handling {challengeType} challenges in a {workRole} position. Include:
        1) Stress response analysis
        2) Coping strategy development
        3) Mindset shifting exercises
        4) Support network building
        5) Professional boundary setting
        6) Recovery practice techniques
        7) Long-term resilience planning
        8) Progress tracking methods`,
        slug: 'resilience-builder',
        form: [
            {
                label: 'Challenge Type',
                field: 'input',
                name: 'challengeType',
                options: ['High Pressure Deadlines', 'Difficult Stakeholders', 'Organizational Change', 'Work-Life Balance', 'Career Setbacks'],
                required: true,
                placeholder: 'Select challenge type',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Work Role',
                field: 'input',
                name: 'workRole',
                options: ['Manager', 'Individual Contributor', 'Project Lead', 'Customer-Facing', 'Executive'],
                required: true,
                placeholder: 'Select your work role',
                style: 'color: grey; font-style: italic;'
            }
        ]
    },
    {
        name: 'Strategic Thinking Developer',
        desc: 'Enhances strategic thinking and long-term planning skills.',
        category: 'Soft Skills',
        icon: 'https://cdn-icons-png.flaticon.com/128/2491/2491324.png',
        aiPrompt: `Design a strategic thinking exercise for {strategyLevel} planning in {industryType}. Include:
        1) Environmental analysis framework
        2) Trend identification methods
        3) Scenario planning exercises
        4) Decision-making frameworks
        5) Risk assessment tools
        6) Stakeholder analysis templates
        7) Implementation planning
        8) Success metrics design`,
        slug: 'strategic-thinking',
        form: [
            {
                label: 'Strategy Level',
                field: 'input',
                name: 'strategyLevel',
                options: ['Department', 'Business Unit', 'Organization-wide', 'Market Entry', 'Product Strategy'],
                required: true,
                placeholder: 'Select strategy level',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Industry Type',
                field: 'input',
                name: 'industryType',
                required: true,
                placeholder: 'e.g., Technology, Healthcare, Retail',
                style: 'color: grey; font-style: italic;'
            }
        ]
    },
    {
        name: 'Innovation Mindset Cultivator',
        desc: 'Develops creative thinking and innovation skills.',
        category: 'Soft Skills',
        icon: 'https://cdn-icons-png.flaticon.com/128/1005/1005141.png',
        aiPrompt: `Create an innovation mindset development program for {innovationType} innovation in {workContext}. Include:
        1) Creative thinking exercises
        2) Innovation process frameworks
        3) Ideation techniques
        4) Barrier identification
        5) Implementation strategies
        6) Collaboration methods
        7) Risk management approaches
        8) Success measurement tools`,
        slug: 'innovation-mindset',
        form: [
            {
                label: 'Innovation Type',
                field: 'input',
                name: 'innovationType',
                options: ['Process', 'Product', 'Service', 'Business Model', 'Cultural'],
                required: true,
                placeholder: 'Select innovation type',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Work Context',
                field: 'input',
                name: 'workContext',
                options: ['Startup', 'Corporate', 'Non-profit', 'Government', 'Education'],
                required: true,
                placeholder: 'Select work context',
                style: 'color: grey; font-style: italic;'
            }
        ]
    },
    {
        name: 'Personal Brand Strategist',
        desc: 'Develops professional personal branding and presence.',
        category: 'Soft Skills',
        icon: 'https://cdn-icons-png.flaticon.com/128/3048/3048127.png',
        aiPrompt: `Create a personal branding strategy for a {careerLevel} professional in {industry}. Include:
        1) Brand identity development
        2) Value proposition creation
        3) Online presence optimization
        4) Content strategy planning
        5) Networking approach
        6) Professional image guidelines
        7) Communication style guide
        8) Brand monitoring methods`,
        slug: 'personal-brand',
        form: [
            {
                label: 'Career Level',
                field: 'input',
                name: 'careerLevel',
                options: ['Entry Level', 'Mid-Career', 'Senior', 'Executive', 'Entrepreneur'],
                required: true,
                placeholder: 'Select your career level',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Industry',
                field: 'input',
                name: 'industry',
                required: true,
                placeholder: 'e.g., Technology, Finance, Healthcare',
                style: 'color: grey; font-style: italic;'
            }
        ]
    },
    {
        name: 'Active Listening Scenario Generator',
        desc: 'Creates realistic scenarios to practice active listening skills.',
        category: 'Soft Skills',
        icon: 'https://cdn-icons-png.flaticon.com/128/2641/2641457.png',
        aiPrompt: `Generate {scenarioCount} workplace scenarios to practice active listening in {context} situations. For each scenario:
        1) Detailed conversation setup
        2) Key verbal and non-verbal cues to watch for
        3) Common listening barriers to overcome
        4) Reflection questions for the listener
        5) Follow-up response suggestions
        6) Active listening technique applications`,
        slug: 'active-listening-practice',
        form: [
            {
                label: 'Context',
                field: 'input',
                name: 'context',
                options: ['One-on-One Meetings', 'Team Discussions', 'Client Interactions', 'Conflict Resolution', 'Feedback Sessions'],
                required: true,
                placeholder: 'Select context',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Number of scenarios',
                field: 'input',
                name: 'scenarioCount',
                type: 'number',
                required: true,
                placeholder: 'e.g., 3',
                style: 'color: grey; font-style: italic;'
            }
        ]
    },
    {
        name: 'Empathy Development Coach',
        desc: 'Builds empathy skills through guided scenarios and reflection.',
        category: 'Soft Skills',
        icon: 'https://cdn-icons-png.flaticon.com/128/3997/3997872.png',
        aiPrompt: `Create an empathy-building exercise based on the {situation} scenario in a {workContext} setting. Include:
        1) Detailed perspective-taking exercises
        2) Emotional awareness prompts
        3) Communication strategy suggestions
        4) Reflection questions
        5) Practice scenarios
        6) Real-world application suggestions`,
        slug: 'empathy-builder',
        form: [
            {
                label: 'Situation Type',
                field: 'input',
                name: 'situation',
                options: ['Team Conflict', 'Customer Complaint', 'Change Management', 'Performance Issues', 'Cultural Differences'],
                required: true,
                placeholder: 'Select a situation type',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Work Context',
                field: 'input',
                name: 'workContext',
                options: ['Remote Team', 'Office Environment', 'Customer Service', 'Management', 'Cross-cultural'],
                required: true,
                placeholder: 'Select work context',
                style: 'color: grey; font-style: italic;'
            }
        ]
    },
    {
        name: 'Decision-Making Simulator',
        desc: 'Develops strategic decision-making skills through realistic scenarios.',
        category: 'Soft Skills',
        icon: 'https://cdn-icons-png.flaticon.com/128/3073/3073437.png',
        aiPrompt: `Create a decision-making scenario for a {decisionType} situation with {stakeholderCount} stakeholders. Include:
        1) Scenario background and context
        2) Stakeholder perspectives and needs
        3) Available options and their implications
        4) Decision-making framework application
        5) Risk assessment guidelines
        6) Implementation planning
        7) Outcome evaluation metrics`,
        slug: 'decision-making-sim',
        form: [
            {
                label: 'Decision Type',
                field: 'input',
                name: 'decisionType',
                options: ['Resource Allocation', 'Strategic Planning', 'Crisis Management', 'Team Restructuring', 'Project Direction'],
                required: true,
                placeholder: 'Select decision type',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Number of Stakeholders',
                field: 'input',
                name: 'stakeholderCount',
                type: 'number',
                required: true,
                placeholder: 'e.g., 4',
                style: 'color: grey; font-style: italic;'
            }
        ]
    },
    {
        name: 'Professional Growth Planner',
        desc: 'Creates personalized career development and skill-building plans.',
        category: 'Soft Skills',
        icon: 'https://cdn-icons-png.flaticon.com/128/1573/1573507.png',
        aiPrompt: `Design a professional development plan for a {careerStage} professional in {industry}, focusing on {focusArea}. Include:
        1) Skill gap analysis
        2) Learning objectives and milestones
        3) Action steps and resources
        4) Networking strategies
        5) Progress measurement metrics
        6) Timeline and checkpoints
        7) Success indicators`,
        slug: 'growth-planner',
        form: [
            {
                label: 'Career Stage',
                field: 'input',
                name: 'careerStage',
                options: ['Early Career', 'Mid-Level', 'Senior', 'Leadership', 'Career Transition'],
                required: true,
                placeholder: 'Select your career stage',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Industry',
                field: 'input',
                name: 'industry',
                required: true,
                placeholder: 'e.g., Technology, Healthcare, Finance',
                style: 'color: grey; font-style: italic;'
            },
            {
                label: 'Focus Area',
                field: 'input',
                name: 'focusArea',
                options: ['Leadership', 'Technical Skills', 'Communication', 'Project Management', 'Strategic Thinking'],
                required: true,
                placeholder: 'Select focus area',
                style: 'color: grey; font-style: italic;'
            }
        ]
    },
];
