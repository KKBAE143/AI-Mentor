export default [
    {
        name: 'Code Generator',
        desc: 'Generates code based on natural language descriptions.',
        category: 'Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/1005/1005141.png',
        aiPrompt: 'Based on the provided description, generate {language} code that implements the described functionality. Include detailed comments explaining the logic and any important considerations. If applicable, suggest potential optimizations or alternative approaches.',
        slug: 'code-generator',
        form: [
            {
                label: 'Describe the desired functionality',
                field: 'textarea',
                name: 'description',
                required: true,
                example: 'Create a function that calculates the factorial of a given number'
            },
            {
                label: 'Select programming language',
                field: 'select',
                name: 'language',
                options: ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Go', 'TypeScript'],
                required: true
            }
        ]
    },
    {
        name: 'Code Debugger',
        desc: 'Identifies and explains errors in pasted code.',
        category: 'Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/1875/1875660.png',
        aiPrompt: 'Analyze the provided {language} code. Identify any syntax errors, logical errors, or potential runtime issues. Explain each error in detail, suggesting corrections and best practices. If no errors are found, provide suggestions for code optimization, readability improvements, and adherence to language-specific conventions.',
        slug: 'code-debugger',
        form: [
            {
                label: 'Paste your code here',
                field: 'textarea',
                name: 'code',
                required: true
            },
            {
                label: 'Select programming language',
                field: 'select',
                name: 'language',
                options: ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Go', 'TypeScript'],
                required: true
            }
        ]
    },
    {
        name: 'Pomodoro Study Plan Creator',
        desc: 'Generates a Pomodoro technique-based study plan for efficient learning.',
        category: 'Time Management',
        icon: 'https://cdn-icons-png.flaticon.com/128/2693/2693507.png',
        aiPrompt: 'Create a Pomodoro technique-based study plan for the topic "{topic}" to be completed over {daysCount} days. Each day should include {sessionCount} Pomodoro sessions. For each session, specify the subtopic to focus on, learning objectives, and suggested activities. Include short and long break activities that reinforce learning. Provide a review strategy for the end of each day and the end of the study period.',
        slug: 'pomodoro-study-plan',
        form: [
            {
                label: 'Enter study topic',
                field: 'input',
                name: 'topic',
                required: true,
                placeholder: 'e.g., Linear Algebra'
            },
            {
                label: 'Number of study days',
                field: 'input',
                name: 'daysCount',
                type: 'number',
                required: true,
                placeholder: 'e.g., 7'
            },
            {
                label: 'Number of Pomodoro sessions per day',
                field: 'input',
                name: 'sessionCount',
                type: 'number',
                required: true,
                placeholder: 'e.g., 5'
            }
        ]
    },
    {
        name: 'Bloom\'s Taxonomy Question Generator',
        desc: 'Creates questions based on Bloom\'s Taxonomy for comprehensive understanding.',
        category: 'Assessment',
        icon: 'https://cdn-icons-png.flaticon.com/128/1246/1246343.png',
        aiPrompt: 'Generate {questionCount} questions for the topic "{topic}" in the subject {subject}, covering all six levels of Bloom\'s Taxonomy (Remember, Understand, Apply, Analyze, Evaluate, Create). For each question, specify the corresponding Bloom\'s level and provide a brief rationale for how it targets that level of thinking.',
        slug: 'blooms-taxonomy-questions',
        form: [
            {
                label: 'Enter topic',
                field: 'input',
                name: 'topic',
                required: true,
                placeholder: 'e.g., Macroeconomics'
            },
            {
                label: 'Enter subject',
                field: 'input',
                name: 'subject',
                required: true,
                placeholder: 'e.g., Economics'
            },
            {
                label: 'Total number of questions',
                field: 'input',
                name: 'questionCount',
                type: 'number',
                required: true,
                placeholder: 'e.g., 18'
            }
        ]
    },
    {
        name: 'Neuroplasticity-Optimized Microlearning Generator',
        desc: 'Creates bite-sized learning modules optimized for long-term retention based on neuroscience principles.',
        category: 'Cognitive Science',
        icon: 'https://cdn-icons-png.flaticon.com/128/2491/2491324.png',
        aiPrompt: 'Develop a series of microlearning modules for the topic "{topic}" in the field of {field}, optimized for maximum neuroplasticity and long-term retention. Consider the following inputs: 1) Target learning duration per module: {duration} minutes, 2) Learner\'s prior exposure to the subject (none, basic, intermediate): {priorExposure}, 3) Primary learning goal (e.g., factual recall, conceptual understanding, skill application): {learningGoal}. For each module, detail: 1) The specific sub-topic or learning objective, 2) A brief, attention-grabbing introduction (using novelty to trigger dopamine release), 3) The core content, broken down into 3-5 key points, 4) An interactive element that encourages active recall and elaborative rehearsal, 5) A real-world application or example to promote context-dependent learning, 6) A brief mindfulness exercise related to the content to enhance neural consolidation, 7) A spaced repetition schedule for reviewing the module content over time (1 day, 1 week, 1 month intervals), 8) Suggestions for multi-modal presentation (visual, auditory, kinesthetic) to engage multiple neural pathways, 9) Ideas for social learning integration to leverage mirror neurons and enhance retention. Additionally, propose a method to adapt the module difficulty based on learner performance, and suggest how to sequence these modules for optimal skill building and knowledge construction.',
        slug: 'neuroplasticity-microlearning',
        form: [
            {
                label: 'Enter learning topic',
                field: 'input',
                name: 'topic',
                required: true,
                placeholder: 'e.g., Photosynthesis'
            },
            {
                label: 'Field of study',
                field: 'input',
                name: 'field',
                required: true,
                placeholder: 'e.g., Plant Biology'
            },
            {
                label: 'Target duration per module (minutes)',
                field: 'input',
                name: 'duration',
                required: true,
                placeholder: 'e.g., 5'
            },
            {
                label: 'Learner\'s prior exposure',
                field: 'input',
                name: 'priorExposure',
                required: true,
                placeholder: 'e.g., Basic'
            },
            {
                label: 'Primary learning goal',
                field: 'input',
                name: 'learningGoal',
                required: true,
                placeholder: 'e.g., Conceptual understanding'
            }
        ]
    },
    {
        name: 'Mnemonic Device Generator',
        desc: 'Creates mnemonic devices to aid memorization of complex information.',
        category: 'Memory Techniques',
        icon: 'https://cdn-icons-png.flaticon.com/128/2787/2787899.png',
        aiPrompt: 'Generate {count} mnemonic devices to help memorize the following information: {information} in the subject of {subject}. Use a variety of mnemonic techniques such as acronyms, acrostics, rhymes, or method of loci. For each mnemonic, explain how to use it effectively and why it aids in remembering the information.',
        slug: 'mnemonic-generator',
        form: [
            {
                label: 'Enter information to memorize',
                field: 'textarea',
                name: 'information',
                required: true,
                placeholder: 'e.g., The first 20 elements of the periodic table'
            },
            {
                label: 'Enter subject area',
                field: 'input',
                name: 'subject',
                required: true,
                placeholder: 'e.g., Chemistry'
            },
            {
                label: 'Number of mnemonics to generate',
                field: 'input',
                name: 'count',
                type: 'number',
                required: true,
                placeholder: 'e.g., 3'
            }
        ]
    },
    {
        name: 'Cognitive Bias Buster for Academic Writing',
        desc: 'Identifies and helps mitigate cognitive biases in research and writing processes.',
        category: 'Critical Thinking',
        icon: 'https://cdn-icons-png.flaticon.com/128/1005/1005141.png',
        aiPrompt: 'Analyze the student\'s research process and draft for the paper titled "{paperTitle}" in the field of {field}, identifying potential cognitive biases and providing strategies to mitigate them. Consider the following inputs: 1) Research methodology: {researchMethod}, 2) Main argument or hypothesis: {mainArgument}, 3) Types of sources used: {sourceTypes}, 4) Student\'s personal stance on the topic: {personalStance}, 5) Time spent on research vs. writing: {timeAllocation}. The analysis should include: 1) A detailed breakdown of potential cognitive biases present in the research process and writing (e.g., confirmation bias, availability heuristic, anchoring bias), with specific examples from the student\'s work. 2) Strategies for each identified bias, including: a) Exercises to challenge assumptions and preconceptions, b) Techniques for seeking out contradictory evidence, c) Methods for diversifying sources and perspectives, d) Approaches to critically evaluating the strength of evidence. 3) A framework for conducting a "bias audit" at each stage of the research and writing process. 4) Suggestions for incorporating structured analytical techniques (e.g., Analysis of Competing Hypotheses, Devil\'s Advocacy) to counteract biases. 5) Guidelines for peer review sessions focused specifically on identifying and challenging biases. 6) A reflection template for the student to document their thought process and decision-making throughout the project. 7) Recommendations for tools and resources that can help identify and mitigate specific biases (e.g., argument mapping software, bias-checking browser extensions). Additionally, provide a "Cognitive Bias Checklist" tailored to the student\'s field of study, to be used as a reference throughout the research and writing process.',
        slug: 'cognitive-bias-buster',
        form: [
            {
                label: 'Paper Title',
                field: 'input',
                name: 'paperTitle',
                required: true,
                placeholder: 'e.g., The Impact of Social Media on Political Polarization'
            },
            {
                label: 'Field of Study',
                field: 'input',
                name: 'field',
                required: true,
                placeholder: 'e.g., Political Science'
            },
            {
                label: 'Research Methodology',
                field: 'input',
                name: 'researchMethod',
                required: true,
                placeholder: 'e.g., Mixed-methods approach with survey and content analysis'
            },
            {
                label: 'Main Argument or Hypothesis',
                field: 'textarea',
                name: 'mainArgument',
                required: true,
                placeholder: 'e.g., Increased social media usage correlates with higher levels of political polarization'
            },
            {
                label: 'Types of Sources Used',
                field: 'input',
                name: 'sourceTypes',
                required: true,
                placeholder: 'e.g., Peer-reviewed journals, news articles, social media data'
            },
            {
                label: 'Personal Stance on the Topic',
                field: 'textarea',
                name: 'personalStance',
                required: true,
                placeholder: 'e.g., Believe social media has a negative impact on political discourse'
            },
            {
                label: 'Time Allocation (Research vs. Writing)',
                field: 'input',
                name: 'timeAllocation',
                required: true,
                placeholder: 'e.g., 60% research, 40% writing'
            }
        ]
    },
    {
        name: 'Synaptic Strength Habit Formation System',
        desc: 'Designs personalized habit formation plans for effective learning routines.',
        category: 'Behavioral Science',
        icon: 'https://cdn-icons-png.flaticon.com/128/3308/3308395.png',
        aiPrompt: 'Create a personalized habit formation plan to establish effective learning routines for a student studying {subject}. Consider the following inputs: 1) Student\'s current daily schedule: {currentSchedule}, 2) Identified obstacles to consistent studying: {obstacles}, 3) Preferred learning environment: {environment}, 4) Motivations for learning this subject: {motivations}, 5) Past attempts at forming study habits: {pastAttempts}. Design a comprehensive plan that includes: 1) A detailed breakdown of small, actionable habits that build towards an effective learning routine, 2) Specific implementation intentions (if-then plans) for each habit, linking them to existing routines or environmental cues, 3) A progressively challenging 66-day habit formation schedule (based on research showing this as an average time for habit formation), 4) Suggestions for environmental redesign to make desired behaviors easier and undesired behaviors harder, 5) A reward system that leverages both extrinsic and intrinsic motivation, with a plan to gradually shift towards intrinsic rewards, 6) Strategies for habit stacking, combining new habits with established ones, 7) Methods for tracking habit adherence and visualizing progress (e.g., a "synaptic strength" metaphor), 8) Contingency plans for dealing with setbacks or "habit relapse", 9) Ideas for involving accountability partners or creating a supportive community, 10) Techniques for mindfulness and self-reflection to enhance awareness of habit cues and rewards. Additionally, propose how this system could adapt over time based on the student\'s progress and changing circumstances, and suggest how it could be integrated with other learning tools and platforms for a holistic approach to educational success.',
        slug: 'habit-formation-system',
        form: [
            {
                label: 'Subject of study',
                field: 'input',
                name: 'subject',
                required: true,
                placeholder: 'e.g., Organic Chemistry'
            },
            {
                label: 'Current daily schedule',
                field: 'input',
                name: 'currentSchedule',
                required: true,
                placeholder: 'e.g., Classes 9-3, Work 4-8, Free time 8-11'
            },
            {
                label: 'Obstacles to consistent studying',
                field: 'input',
                name: 'obstacles',
                required: true,
                placeholder: 'e.g., Procrastination, social media distractions'
            },
            {
                label: 'Preferred learning environment',
                field: 'input',
                name: 'environment',
                required: true,
                placeholder: 'e.g., Quiet library, nature settings'
            },
            {
                label: 'Motivations for learning',
                field: 'input',
                name: 'motivations',
                required: true,
                placeholder: 'e.g., Career advancement, personal interest'
            },
            {
                label: 'Past attempts at forming study habits',
                field: 'input',
                name: 'pastAttempts',
                required: true,
                placeholder: 'e.g., Tried pomodoro technique, daily reminders'
            }
        ]
    },
    {
        name: 'Quantum Entanglement Peer Learning Matchmaker',
        desc: 'Pairs learners for optimal peer learning experiences using quantum-inspired algorithms.',
        category: 'Collaborative Learning',
        icon: 'https://cdn-icons-png.flaticon.com/128/1005/1005141.png',
        aiPrompt: 'Design a quantum-inspired algorithm to match learners for optimal peer learning experiences in the subject area of {subject}. Consider the following inputs for each learner: 1) Current knowledge level (1-10): {knowledgeLevel}, 2) Learning goals: {learningGoals}, 3) Preferred collaboration style (e.g., discussion-based, project-based): {collabStyle}, 4) Personality traits (e.g., introvert/extrovert, analytical/creative): {personalityTraits}, 5) Available collaboration time per week: {availableTime} hours, 6) Preferred communication channels: {commChannels}, 7) Languages spoken: {languages}, 8) Time zone: {timeZone}. Describe in detail: 1) How the quantum-inspired algorithm would work to find optimal matches, considering both complementary and similar traits, 2) The "entanglement metrics" used to quantify the potential synergy between learners, 3) How the algorithm adapts matches over time based on feedback and learning outcomes, 4) Suggested collaboration activities or projects for matched pairs or groups, 5) A system for tracking and visualizing the "learning entanglement" of matched individuals over time, 6) Ideas for gamification elements to encourage active participation and knowledge sharing (e.g., collaborative challenges, peer teaching rewards), 7) Methods for resolving potential conflicts or mismatches, 8) Strategies for gradually expanding learners\' networks while maintaining strong core connections. Additionally, propose how this system could be used to create a global, self-organizing learning community that maximizes knowledge flow and skill development across diverse groups of learners.',
        slug: 'quantum-peer-matching',
        form: [
            {
                label: 'Subject area',
                field: 'input',
                name: 'subject',
                required: true,
                placeholder: 'e.g., Data Science'
            },
            {
                label: 'Knowledge level (1-10)',
                field: 'input',
                name: 'knowledgeLevel',
                required: true,
                placeholder: 'e.g., 7'
            },
            {
                label: 'Learning goals',
                field: 'input',
                name: 'learningGoals',
                required: true,
                placeholder: 'e.g., Master predictive modeling techniques'
            },
            {
                label: 'Preferred collaboration style',
                field: 'input',
                name: 'collabStyle',
                required: true,
                placeholder: 'e.g., Project-based'
            },
            {
                label: 'Personality traits',
                field: 'input',
                name: 'personalityTraits',
                required: true,
                placeholder: 'e.g., Introverted, analytical'
            },
            {
                label: 'Available collaboration time per week (hours)',
                field: 'input',
                name: 'availableTime',
                required: true,
                placeholder: 'e.g., 5'
            },
            {
                label: 'Preferred communication channels',
                field: 'input',
                name: 'commChannels',
                required: true,
                placeholder: 'e.g., Video calls, instant messaging'
            },
            {
                label: 'Languages spoken',
                field: 'input',
                name: 'languages',
                required: true,
                placeholder: 'e.g., English, Spanish'
            },
            {
                label: 'Time zone',
                field: 'input',
                name: 'timeZone',
                required: true,
                placeholder: 'e.g., GMT-5'
            }
        ]
    },
    {
        name: 'Feynman Technique Explainer',
        desc: 'Generates simple explanations of complex topics using the Feynman Technique.',
        category: 'Learning Techniques',
        icon: 'https://cdn-icons-png.flaticon.com/128/1491/1491329.png',
        aiPrompt: 'Explain the concept of "{concept}" using the Feynman Technique. Break down the explanation into simple terms as if teaching it to someone with no prior knowledge of the subject. Use analogies and examples where appropriate. Identify and clarify any technical terms. Suggest a practical application or experiment to reinforce understanding.',
        slug: 'feynman-technique-explainer',
        form: [
            {
                label: 'Enter concept to explain',
                field: 'input',
                name: 'concept',
                required: true,
                placeholder: 'e.g., Quantum Entanglement'
            }
        ]
    },
    {
        name: 'Sensory Augmented Memorization Technique (SAM-Tech)',
        desc: 'Creates multi-sensory memory aids for complex information retention.',
        category: 'Memory Enhancement',
        icon: 'https://cdn-icons-png.flaticon.com/128/2787/2787899.png',
        aiPrompt: 'Develop a Sensory Augmented Memorization (SAM) technique for the topic "{topic}" in the field of {field}. This technique should create rich, multi-sensory memory aids to enhance retention of complex information. Consider the following inputs: 1) Key concepts to memorize: {keyConcepts}, 2) Student\'s dominant learning style: {learningStyle}, 3) Available study aids: {studyAids} (e.g., VR headset, musical instruments, art supplies), 4) Time available for creating memory aids: {creationTime} hours, 5) Memorization deadline: {deadline}. The SAM technique should include: 1) A "sensory encoding" strategy for each key concept, involving at least three senses. For each concept, provide: a) A visual component (e.g., vivid mental image, diagram, or physical model), b) An auditory component (e.g., mnemonic song, rhythmic chant, or sound effect), c) A kinesthetic/tactile component (e.g., gesture, texture, or physical interaction), d) Optional olfactory or gustatory components if relevant and safe. 2) A "sensory storyline" that links all the concepts together in a memorable, multi-sensory narrative. 3) Instructions for creating a "memory palace" that incorporates these sensory elements, with suggestions for using real or virtual environments. 4) A guide to developing "concept avatars" - personified versions of abstract ideas with distinct sensory characteristics. 5) "Synesthetic associations" that cross-link different sensory representations (e.g., associating colors with sounds, or textures with abstract concepts). 6) A "sensory rehearsal" schedule that alternates between different sensory modes to strengthen memory pathways. 7) Ideas for "real-world anchors" that connect abstract concepts to everyday sensory experiences. 8) Suggestions for creating "sensory flashcards" that incorporate touch, smell, or taste, not just visual cues. 9) A method for generating "sensory mnemonics" that use multiple senses to encode lists or sequences. 10) Guidance on using "embodied cognition" techniques to associate concepts with body positions or movements. Additionally, provide a template for a "Sensory Learning Log" where the student can track the effectiveness of different sensory associations and refine their personal SAM technique over time.',
        slug: 'sam-tech',
        form: [
            {
                label: 'Topic',
                field: 'input',
                name: 'topic',
                required: true,
                placeholder: 'e.g., Periodic Table of Elements'
            },
            {
                label: 'Field',
                field: 'input',
                name: 'field',
                required: true,
                placeholder: 'e.g., Chemistry'
            },
            {
                label: 'Key Concepts to Memorize',
                field: 'textarea',
                name: 'keyConcepts',
                required: true,
                placeholder: 'e.g., Element symbols, atomic numbers, electron configurations'
            },
            {
                label: 'Dominant Learning Style',
                field: 'input',
                name: 'learningStyle',
                required: true,
                placeholder: 'e.g., Visual-Kinesthetic'
            },
            {
                label: 'Available Study Aids',
                field: 'input',
                name: 'studyAids',
                required: true,
                placeholder: 'e.g., VR headset, musical keyboard, modeling clay'
            },
            {
                label: 'Time for Creating Memory Aids (hours)',
                field: 'input',
                name: 'creationTime',
                type: 'number',
                required: true,
                placeholder: 'e.g., 5'
            },
            {
                label: 'Memorization Deadline',
                field: 'input',
                name: 'deadline',
                required: true,
                placeholder: 'e.g., 2023-11-30'
            }
        ]
    },
    {
        name: 'Exam Prep Scheduler',
        desc: 'Creates a personalized study schedule leading up to an exam.',
        category: 'Time Management',
        icon: 'https://cdn-icons-png.flaticon.com/128/2693/2693507.png',
        aiPrompt: 'Create a detailed study schedule for the exam "{examName}" in the subject {subject}, scheduled for {examDate}. Consider the following inputs: 1) Current knowledge level (1-10): {knowledgeLevel}, 2) Available study time per day: {studyTimePerDay} hours, 3) Key topics to cover: {keyTopics}, 4) Preferred study methods: {studyMethods}, 5) Any specific areas of difficulty: {difficultAreas}. The schedule should include: 1) A day-by-day breakdown of topics to study, 2) Specific tasks or activities for each study session (e.g., review notes, practice problems, watch video lectures), 3) Short breaks and self-care reminders, 4) Mini-milestones to track progress, 5) Suggested resources for each topic, 6) Time allocations based on topic difficulty and current knowledge level, 7) Regular review sessions for previously covered material, 8) A mock exam session 2-3 days before the actual exam, 9) Tips for managing exam anxiety. Additionally, provide strategies for adjusting the schedule if the student falls behind or finds certain topics more challenging than anticipated.',
        slug: 'exam-prep-scheduler',
        form: [
            {
                label: 'Exam Name',
                field: 'input',
                name: 'examName',
                required: true,
                placeholder: 'e.g., Midterm Biology Exam'
            },
            {
                label: 'Subject',
                field: 'input',
                name: 'subject',
                required: true,
                placeholder: 'e.g., Biology'
            },
            {
                label: 'Exam Date',
                field: 'input',
                name: 'examDate',
                required: true,
                placeholder: 'e.g., 2023-12-15'
            },
            {
                label: 'Current Knowledge Level (1-10)',
                field: 'input',
                name: 'knowledgeLevel',
                type: 'number',
                required: true,
                placeholder: 'e.g., 6'
            },
            {
                label: 'Available Study Time Per Day (hours)',
                field: 'input',
                name: 'studyTimePerDay',
                type: 'number',
                required: true,
                placeholder: 'e.g., 3'
            },
            {
                label: 'Key Topics to Cover',
                field: 'textarea',
                name: 'keyTopics',
                required: true,
                placeholder: 'e.g., Cell Structure, Photosynthesis, Genetics'
            },
            {
                label: 'Preferred Study Methods',
                field: 'input',
                name: 'studyMethods',
                required: true,
                placeholder: 'e.g., Flashcards, Practice Tests, Group Study'
            },
            {
                label: 'Difficult Areas',
                field: 'textarea',
                name: 'difficultAreas',
                required: true,
                placeholder: 'e.g., Memorizing scientific terms, Understanding metabolic pathways'
            }
        ]
    },
    {
        name: 'Metacognitive Study Journal',
        desc: 'Guides students in reflecting on and optimizing their learning processes.',
        category: 'Self-Regulated Learning',
        icon: 'https://cdn-icons-png.flaticon.com/128/2693/2693507.png',
        aiPrompt: 'Design a personalized Metacognitive Study Journal for a student studying {subject}, focusing on the topic {topic}. Consider the following inputs: 1) Student\'s current study habits: {studyHabits}, 2) Identified learning strengths and weaknesses: {learningProfile}, 3) Upcoming assessment types: {assessmentTypes}, 4) Available study time per week: {studyTime} hours, 5) Long-term learning goals: {learningGoals}. The Metacognitive Study Journal should include: 1) A daily reflection template with prompts for: a) Pre-study planning and goal setting, b) In-study monitoring of comprehension and strategy effectiveness, c) Post-study evaluation and adjustment of approach. 2) A weekly "learning strategy experiment" section where the student tests a new study technique and analyzes its effectiveness. 3) A "cognitive load tracker" to help the student identify when they\'re overwhelmed and need to adjust their approach. 4) A "eureka moment" log for recording breakthrough understandings and the conditions that led to them. 5) A "question formulation" exercise to help the student generate higher-order questions about the material. 6) A "learning transfer" section where the student actively looks for connections between the current topic and other subjects or real-world applications. 7) A "study environment optimization" log to track how different settings affect focus and retention. 8) A "progress visualization" tool where the student can graph their perceived understanding of key concepts over time. 9) A "roadblock analysis" framework for breaking down and addressing persistent areas of confusion. 10) A "feedback integration" section for recording and acting on feedback from instructors or peers. 11) A monthly "learning journey recap" that synthesizes insights and plans adjustments for the next month. Additionally, provide a guide on how to use data from this journal to create a "Personal Learning Algorithm" - a set of if-then rules for optimizing study sessions based on the student\'s evolving understanding of their learning process.',
        slug: 'metacognitive-journal',
        form: [
            {
                label: 'Subject',
                field: 'input',
                name: 'subject',
                required: true,
                placeholder: 'e.g., Molecular Biology'
            },
            {
                label: 'Topic',
                field: 'input',
                name: 'topic',
                required: true,
                placeholder: 'e.g., Gene Expression'
            },
            {
                label: 'Current Study Habits',
                field: 'textarea',
                name: 'studyHabits',
                required: true,
                placeholder: 'e.g., Reading textbook, making flashcards, watching video lectures'
            },
            {
                label: 'Learning Strengths and Weaknesses',
                field: 'textarea',
                name: 'learningProfile',
                required: true,
                placeholder: 'e.g., Strong in visual learning, weak in auditory retention'
            },
            {
                label: 'Upcoming Assessment Types',
                field: 'input',
                name: 'assessmentTypes',
                required: true,
                placeholder: 'e.g., Multiple-choice exams, lab reports, oral presentation'
            },
            {
                label: 'Available Study Time per Week (hours)',
                field: 'input',
                name: 'studyTime',
                type: 'number',
                required: true,
                placeholder: 'e.g., 15'
            },
            {
                label: 'Long-term Learning Goals',
                field: 'textarea',
                name: 'learningGoals',
                required: true,
                placeholder: 'e.g., Prepare for graduate school, understand cutting-edge research in the field'
            }
        ]
    },
    {
        name: 'Practice Question Generator',
        desc: 'Creates practice questions for any subject or topic.',
        category: 'Assessment',
        icon: 'https://cdn-icons-png.flaticon.com/128/4939/4939574.png',
        aiPrompt: 'Generate {questionCount} practice questions for the subject "{subject}" focusing on the topics: {topics}. Include a mix of question types (multiple choice, short answer, true/false, etc.). Provide correct answers and brief explanations for each question. Ensure questions vary in difficulty to cover different levels of understanding.',
        slug: 'practice-question-generator',
        form: [
            {
                label: 'Enter subject',
                field: 'input',
                name: 'subject',
                required: true
            },
            {
                label: 'Enter topics (comma-separated)',
                field: 'textarea',
                name: 'topics',
                required: true
            },
            {
                label: 'Number of questions',
                field: 'input',
                name: 'questionCount',
                type: 'number',
                required: true
            }
        ]
    },
    {
        name: 'Lecture Summarizer',
        desc: 'Summarizes key points from lecture notes or transcripts.',
        category: 'Learning',
        icon: 'https://cdn-icons-png.flaticon.com/128/2641/2641457.png',
        aiPrompt: 'Analyze the provided lecture notes or transcript on {subject}. Create a concise summary highlighting the main topics, key concepts, and important examples. Organize the summary in a structured format with headings and bullet points for easy review. Include any crucial formulas, dates, or definitions mentioned.',
        slug: 'lecture-summarizer',
        form: [
            {
                label: 'Enter lecture subject',
                field: 'input',
                name: 'subject',
                required: true
            },
            {
                label: 'Paste lecture notes or transcript',
                field: 'textarea',
                name: 'lectureContent',
                required: true
            }
        ]
    },
    {
        name: 'Analogical Problem-Solving Guide',
        desc: 'Creates guides for using analogies to solve complex problems.',
        category: 'Problem Solving',
        icon: 'https://cdn-icons-png.flaticon.com/128/5390/5390264.png',
        aiPrompt: 'Develop an analogical problem-solving guide for the complex problem "{problem}" in the field of {field}. Identify {analogyCount} analogous situations or problems from different domains. For each analogy, explain how it relates to the original problem, what insights can be gained, and how to apply these insights to develop a solution. Provide step-by-step guidance on using analogical thinking to approach the problem.',
        slug: 'analogical-problem-solving',
        form: [
            {
                label: 'Enter complex problem',
                field: 'input',
                name: 'problem',
                required: true,
                placeholder: 'e.g., Optimizing Supply Chain Efficiency'
            },
            {
                label: 'Enter field of study',
                field: 'input',
                name: 'field',
                required: true,
                placeholder: 'e.g., Business Management'
            },
            {
                label: 'Number of analogies',
                field: 'input',
                name: 'analogyCount',
                type: 'number',
                required: true,
                placeholder: 'e.g., 3'
            }
        ]
    },
    {
        name: 'Interdisciplinary Concept Synthesizer',
        desc: 'Helps students connect ideas across different subjects for deeper understanding.',
        category: 'Holistic Learning',
        icon: 'https://cdn-icons-png.flaticon.com/128/2541/2541988.png',
        aiPrompt: 'Create an interdisciplinary learning map that connects the concept "{primaryConcept}" from the subject {primarySubject} with related ideas from {secondarySubject1} and {secondarySubject2}. Consider the following inputs: 1) Student\'s proficiency level in each subject (1-10): {proficiencyLevels}, 2) Learning objectives: {learningObjectives}, 3) Preferred learning style: {learningStyle}, 4) Available time for exploration: {explorationTime} hours. The interdisciplinary map should include: 1) A central hub detailing the primary concept, with branches extending to related concepts in the secondary subjects. 2) For each connection, provide: a) A clear explanation of how the concepts relate, b) Real-world examples or case studies that illustrate the interdisciplinary nature of the ideas, c) Potential research questions or project ideas that span the subjects. 3) A "knowledge gap analysis" identifying areas where the student might need additional background information to fully grasp the connections. 4) Suggested resources (e.g., articles, videos, interactive simulations) for each concept, tailored to the student\'s proficiency level. 5) Interdisciplinary exercises or thought experiments that require applying knowledge from all three subjects. 6) A glossary of key terms from each subject, with cross-references to show shared vocabulary or similar concepts with different names. 7) A timeline or historical context section, showing how these ideas have evolved and influenced each other over time. 8) Suggestions for experts or thought leaders who work at the intersection of these fields, with key papers or talks to explore. 9) A section on potential career paths or emerging fields that leverage knowledge from this interdisciplinary intersection. Additionally, provide a template for an "Interdisciplinary Reflection Journal" where the student can document insights, questions, and potential applications of this synthesized knowledge.',
        slug: 'interdisciplinary-synthesizer',
        form: [
            {
                label: 'Primary Concept',
                field: 'input',
                name: 'primaryConcept',
                required: true,
                placeholder: 'e.g., Entropy'
            },
            {
                label: 'Primary Subject',
                field: 'input',
                name: 'primarySubject',
                required: true,
                placeholder: 'e.g., Physics'
            },
            {
                label: 'Secondary Subject 1',
                field: 'input',
                name: 'secondarySubject1',
                required: true,
                placeholder: 'e.g., Information Theory'
            },
            {
                label: 'Secondary Subject 2',
                field: 'input',
                name: 'secondarySubject2',
                required: true,
                placeholder: 'e.g., Economics'
            },
            {
                label: 'Proficiency Levels (comma-separated, 1-10)',
                field: 'input',
                name: 'proficiencyLevels',
                required: true,
                placeholder: 'e.g., 8,6,5'
            },
            {
                label: 'Learning Objectives',
                field: 'textarea',
                name: 'learningObjectives',
                required: true,
                placeholder: 'e.g., Understand how entropy applies across disciplines, Identify real-world applications'
            },
            {
                label: 'Preferred Learning Style',
                field: 'input',
                name: 'learningStyle',
                required: true,
                placeholder: 'e.g., Visual and hands-on'
            },
            {
                label: 'Available Exploration Time (hours)',
                field: 'input',
                name: 'explorationTime',
                type: 'number',
                required: true,
                placeholder: 'e.g., 10'
            }
        ]
    },
    {
        name: 'Technical Documentation Simplifier',
        desc: 'Simplifies complex technical documentation for easier understanding.',
        category: 'Technical Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/2665/2665632.png',
        aiPrompt: 'Simplify the following technical documentation on "{topic}" for a {audience} audience. Maintain the key information while reducing complexity and jargon. Break down complex processes into step-by-step explanations. Use analogies where appropriate to clarify difficult concepts. Aim for a readability level suitable for {educationLevel} education.',
        slug: 'documentation-simplifier',
        form: [
            {
                label: 'Enter technical topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Paste technical documentation',
                field: 'textarea',
                name: 'documentation',
                required: true
            },
            {
                label: 'Select target audience',
                field: 'select',
                name: 'audience',
                options: ['General public', 'Students', 'Professionals in other fields', 'New employees'],
                required: true
            },
            {
                label: 'Select education level',
                field: 'select',
                name: 'educationLevel',
                options: ['High school', 'Undergraduate', 'Graduate', 'Professional'],
                required: true
            }
        ]
    },
    {
        name: 'Vocabulary List Creator',
        desc: 'Creates a vocabulary list with definitions for any subject.',
        category: 'Language',
        icon: 'https://cdn-icons-png.flaticon.com/128/1573/1573507.png',
        aiPrompt: 'Generate a vocabulary list of {wordCount} words related to the subject "{subject}". For each word, provide a clear definition, an example sentence, and if applicable, any relevant synonyms or antonyms. Organize the list alphabetically and include pronunciation guides for challenging words.',
        slug: 'vocabulary-list-creator',
        form: [
            {
                label: 'Enter subject',
                field: 'input',
                name: 'subject',
                required: true
            },
            {
                label: 'Number of words',
                field: 'input',
                name: 'wordCount',
                type: 'number',
                required: true
            }
        ]
    },
    {
        name: 'Topic-specific Analogy Generator',
        desc: 'Creates analogies to explain complex topics.',
        category: 'Learning',
        icon: 'https://cdn-icons-png.flaticon.com/128/2143/2143458.png',
        aiPrompt: 'Generate {analogyCount} creative and relatable analogies to explain the concept of "{concept}" in the field of {field}. Each analogy should draw parallels between the complex concept and everyday situations or objects. Provide a brief explanation of how each analogy relates to the original concept.',
        slug: 'analogy-generator',
        form: [
            {
                label: 'Enter concept',
                field: 'input',
                name: 'concept',
                required: true
            },
            {
                label: 'Enter field or subject',
                field: 'input',
                name: 'field',
                required: true
            },
            {
                label: 'Number of analogies',
                field: 'input',
                name: 'analogyCount',
                type: 'number',
                required: true
            }
        ]
    },
    {
        name: 'Exam Preparation Checklist Creator',
        desc: 'Generates a comprehensive exam preparation checklist.',
        category: 'Study Planning',
        icon: 'https://cdn-icons-png.flaticon.com/128/4365/4365271.png',
        aiPrompt: 'Create a detailed exam preparation checklist for the {subject} exam covering the topics: {topics}. Include key areas to study, suggested review methods, practice question types, and time management tips. Organize the checklist in a logical order, starting from basic review to advanced preparation strategies. Add self-assessment checkpoints throughout the list.',
        slug: 'exam-prep-checklist',
        form: [
            {
                label: 'Enter subject',
                field: 'input',
                name: 'subject',
                required: true
            },
            {
                label: 'Enter main topics (comma-separated)',
                field: 'textarea',
                name: 'topics',
                required: true
            }
        ]
    },
    {
        name: 'Research Paper Title and Abstract Generator',
        desc: 'Generates research paper titles and abstracts based on given topics.',
        category: 'Academic Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/3073/3073437.png',
        aiPrompt: 'Generate {count} potential research paper titles and corresponding abstracts for the topic: "{topic}" in the field of {field}. Each title should be concise yet descriptive. The abstracts should be approximately 250 words each, outlining the research question, methodology, key findings, and significance of the proposed study.',
        slug: 'research-paper-generator',
        form: [
            {
                label: 'Enter research topic',
                field: 'textarea',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter field of study',
                field: 'input',
                name: 'field',
                required: true
            },
            {
                label: 'Number of titles and abstracts',
                field: 'input',
                name: 'count',
                type: 'number',
                required: true
            }
        ]
    },
    {
        name: 'Learning Objective Breakdown',
        desc: 'Breaks down learning objectives for any topic.',
        category: 'Curriculum Design',
        icon: 'https://cdn-icons-png.flaticon.com/128/3176/3176390.png',
        aiPrompt: 'Break down the main learning objective "{objective}" for the topic "{topic}" into {count} specific, measurable, achievable, relevant, and time-bound (SMART) sub-objectives. For each sub-objective, provide a brief description and suggest an assessment method to measure student achievement.',
        slug: 'learning-objective-breakdown',
        form: [
            {
                label: 'Enter main learning objective',
                field: 'textarea',
                name: 'objective',
                required: true
            },
            {
                label: 'Enter topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Number of sub-objectives',
                field: 'input',
                name: 'count',
                type: 'number',
                required: true
            }
        ]
    },
    {
        name: 'Custom Flashcard Set Creator',
        desc: 'Creates custom flashcard sets for any subject.',
        category: 'Study Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/3308/3308395.png',
        aiPrompt: 'Generate a set of {cardCount} flashcards for the subject "{subject}" focusing on the topics: {topics}. Each flashcard should have a clear question or prompt on one side and a concise answer or explanation on the other. Include a mix of definition-based, conceptual, and application-oriented cards. Organize the flashcards in a logical progression of difficulty.',
        slug: 'flashcard-creator',
        form: [
            {
                label: 'Enter subject',
                field: 'input',
                name: 'subject',
                required: true
            },
            {
                label: 'Enter topics (comma-separated)',
                field: 'textarea',
                name: 'topics',
                required: true
            },
            {
                label: 'Number of flashcards',
                field: 'input',
                name: 'cardCount',
                type: 'number',
                required: true
            }
        ]
    },
    {
        name: 'Debate Argument Generator',
        desc: 'Generates arguments for and against a given topic.',
        category: 'Critical Thinking',
        icon: 'https://cdn-icons-png.flaticon.com/128/3708/3708688.png',
        aiPrompt: "Generate a balanced set of arguments for and against the topic: '{topic}'. Provide {argCount} strong arguments for each side, including supporting evidence or examples for each point. Conclude with potential counterarguments for each side's main points. Present the arguments in a structured format suitable for debate preparation.",
        slug: 'debate-argument-generator',
        form: [
            {
                label: 'Enter debate topic',
                field: 'textarea',
                name: 'topic',
                required: true
            },
            {
                label: 'Number of arguments per side',
                field: 'input',
                name: 'argCount',
                type: 'number',
                required: true
            }
        ]
    },
    {
        name: 'Case Study Scenario Generator',
        desc: 'Creates detailed case study scenarios for analysis.',
        category: 'Problem-Based Learning',
        icon: 'https://cdn-icons-png.flaticon.com/128/3771/3771160.png',
        aiPrompt: 'Generate a detailed case study scenario in the field of {field} focusing on the topic: "{topic}". The case study should be approximately {wordCount} words long, presenting a complex, real-world situation that requires analysis and problem-solving. Include background information, key challenges, and relevant data. Conclude with {questionCount} thought-provoking questions for analysis.',
        slug: 'case-study-generator',
        form: [
            {
                label: 'Enter field of study',
                field: 'input',
                name: 'field',
                required: true
            },
            {
                label: 'Enter specific topic',
                field: 'textarea',
                name: 'topic',
                required: true
            },
            {
                label: 'Word count',
                field: 'input',
                name: 'wordCount',
                type: 'number',
                required: true
            },
            {
                label: 'Number of analysis questions',
                field: 'input',
                name: 'questionCount',
                type: 'number',
                required: true
            }
        ]
    },
    {
        name: 'Personalized Study Schedule Creator',
        desc: 'Creates a customized study schedule based on user preferences and commitments.',
        category: 'Time Management',
        icon: 'https://cdn-icons-png.flaticon.com/128/2693/2693507.png',
        aiPrompt: 'Create a personalized {duration}-week study schedule for the subject(s): {subjects}. Factor in the user\'s available study times: {availableTimes}, preferred study duration per session: {sessionDuration} minutes, and any specific deadlines: {deadlines}. Include breaks, review sessions, and distribute topics evenly. Provide a day-by-day breakdown with specific study tasks and goals.',
        slug: 'study-schedule-creator',
        form: [
            {
                label: 'Enter subject(s) (comma-separated)',
                field: 'textarea',
                name: 'subjects',
                required: true
            },
            {
                label: 'Schedule duration (weeks)',
                field: 'input',
                name: 'duration',
                type: 'number',
                required: true
            },
            {
                label: 'Available study times (e.g., weekday evenings, weekend mornings)',
                field: 'textarea',
                name: 'availableTimes',
                required: true
            },
            {
                label: 'Preferred study session duration (minutes)',
                field: 'input',
                name: 'sessionDuration',
                type: 'number',
                required: true
            },
            {
                label: 'Specific deadlines (if any)',
                field: 'textarea',
                name: 'deadlines',
                required: false
            }
        ]
    },
    {
        name: 'Topic-to-Subtopic Breakdown',
        desc: 'Breaks down complex subjects into manageable subtopics.',
        category: 'Learning',
        icon: 'https://cdn-icons-png.flaticon.com/128/1525/1525097.png',
        aiPrompt: 'Break down the complex topic "{topic}" in the field of {field} into a hierarchical structure of subtopics. Provide {levels} levels of depth, with each level becoming more specific. For each subtopic, include a brief description and its relevance to the main topic. Suggest potential resources or further reading for key subtopics.',
        slug: 'topic-subtopic-breakdown',
        form: [
            {
                label: 'Enter main topic',
                field: 'textarea',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter field of study',
                field: 'input',
                name: 'field',
                required: true
            },
            {
                label: 'Number of hierarchical levels',
                field: 'input',
                name: 'levels',
                type: 'number',
                required: true
            }
        ]
    },
    {
        name: 'Literature Review Outline Generator',
        desc: 'Creates a structured outline for literature reviews.',
        category: 'Academic Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/3750/3750072.png',
        aiPrompt: 'Generate a comprehensive outline for a literature review on the topic: "{topic}" in the field of {field}. The outline should include an introduction, {sectionCount} main body sections organized by themes or chronology, and a conclusion. For each section, suggest {sourceCount} key sources to be reviewed, providing brief annotations. Include placeholders for critical analysis and synthesis of the literature.',
        slug: 'literature-review-outline',
        form: [
            {
                label: 'Enter literature review topic',
                field: 'textarea',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter field of study',
                field: 'input',
                name: 'field',
                required: true
            },
            {
                label: 'Number of main sections',
                field: 'input',
                name: 'sectionCount',
                type: 'number',
                required: true
            },
            {
                label: 'Number of key sources per section',
                field: 'input',
                name: 'sourceCount',
                type: 'number',
                required: true
            }
        ]
    },
    {
        name: 'Presentation Slide Content Creator',
        desc: 'Generates content for presentation slides on any topic.',
        category: 'Presentation',
        icon: 'https://cdn-icons-png.flaticon.com/128/1172/1172301.png',
        aiPrompt: 'Create content for a {slideCount}-slide presentation on the topic: "{topic}". Generate a title slide, an agenda, and content for each main section. For each slide, provide a headline, 3-5 key points, and suggestions for relevant visuals or data representation. Include speaker notes with additional details and transition suggestions between slides.',
        slug: 'presentation-slide-creator',
        form: [
            {
                label: 'Enter presentation topic',
                field: 'textarea',
                name: 'topic',
                required: true
            },
            {
                label: 'Number of slides',
                field: 'input',
                name: 'slideCount',
                type: 'number',
                required: true
            }
        ]
    },
    {
        name: 'Quiz Question and Answer Set Generator',
        desc: 'Creates comprehensive quiz sets with questions and answers.',
        category: 'Assessment',
        icon: 'https://cdn-icons-png.flaticon.com/128/4939/4939574.png',
        aiPrompt: 'Generate a set of {questionCount} quiz questions on the topic: "{topic}" for {level} level students. Include a mix of multiple-choice, true/false, and short answer questions. Provide the correct answer for each question, along with brief explanations. For multiple-choice questions, include plausible distractors. Organize the questions in order of increasing difficulty.',
        slug: 'quiz-generator',
        form: [
            {
                label: 'Enter quiz topic',
                field: 'textarea',
                name: 'topic',
                required: true
            },
            {
                label: 'Number of questions',
                field: 'input',
                name: 'questionCount',
                type: 'number',
                required: true
            },
            {
                label: 'Select difficulty level',
                field: 'select',
                name: 'level',
                options: ['Beginner', 'Intermediate', 'Advanced'],
                required: true
            }
        ]
    },
    {
        name: 'Problem-Solving Step Generator',
        desc: 'Creates step-by-step solutions for math and science problems.',
        category: 'STEM',
        icon: 'https://cdn-icons-png.flaticon.com/128/2620/2620389.png',
        aiPrompt: 'Generate a detailed, step-by-step solution for the following {subject} problem: "{problem}". Break down the solution into {stepCount} clear steps, explaining the reasoning behind each step. Include any relevant formulas, calculations, or diagrams. Conclude with a final answer and a brief explanation of its significance or applications.',
        slug: 'problem-solving-steps',
        form: [
            {
                label: 'Enter subject (e.g., Physics, Calculus)',
                field: 'input',
                name: 'subject',
                required: true
            },
            {
                label: 'Enter the problem statement',
                field: 'textarea',
                name: 'problem',
                required: true
            },
            {
                label: 'Desired number of solution steps',
                field: 'input',
                name: 'stepCount',
                type: 'number',
                required: true
            }
        ]
    },
    {
        name: 'Writing Prompt Generator',
        desc: 'Creates engaging writing prompts for creative assignments.',
        category: 'Creative Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/3075/3075908.png',
        aiPrompt: 'Generate {promptCount} unique and thought-provoking writing prompts suitable for {genre} writing at a {level} level. Each prompt should include a central theme or scenario, suggested character elements, and a potential conflict or challenge. Add optional elements like setting descriptions or time constraints to enhance creativity.',
        slug: 'writing-prompt-generator',
        form: [
            {
                label: 'Number of prompts',
                field: 'input',
                name: 'promptCount',
                type: 'number',
                required: true
            },
            {
                label: 'Select writing genre',
                field: 'select',
                name: 'genre',
                options: ['Short Story', 'Poetry', 'Personal Essay', 'Science Fiction', 'Fantasy', 'Mystery'],
                required: true
            },
            {
                label: 'Select difficulty level',
                field: 'select',
                name: 'level',
                options: ['Beginner', 'Intermediate', 'Advanced'],
                required: true
            }
        ]
    },
    {
        name: 'Personalized Learning Style Optimizer',
        desc: 'Analyzes learning preferences and creates tailored study strategies.',
        category: 'Learning Strategies',
        icon: 'https://cdn-icons-png.flaticon.com/128/2436/2436874.png',
        aiPrompt: `Create a personalized learning style optimization plan based on the following inputs:

1. Learning Style Assessment:
   - Visual Score: {visualScore}
   - Auditory Score: {auditoryScore}
   - Kinesthetic Score: {kinestheticScore}
   - Reading/Writing Score: {readingWritingScore}

2. Subject Area: {subjectArea}
3. Current Study Challenges: {challenges}
4. Available Study Time: {studyTime} hours per week
5. Learning Goals: {learningGoals}

Develop a comprehensive plan that includes:

1. Learning Style Analysis:
   - Interpret the scores to identify the primary and secondary learning styles.
   - Explain how these styles impact the learning process in the given subject area.

2. Tailored Study Strategies:
   - Provide 5-7 specific study techniques that align with the identified learning styles.
   - Explain how each technique leverages the student's strengths and addresses challenges.

3. Resource Recommendations:
   - Suggest learning resources that match the dominant learning styles (e.g., video tutorials, interactive simulations, audiobooks).
   - Recommend tools or apps that can enhance learning based on the identified styles.

4. Environment Optimization:
   - Describe the ideal study environment that caters to the student's learning preferences.
   - Suggest modifications to the current study space to better support the learning styles.

5. Information Processing Techniques:
   - Provide methods for note-taking, information organization, and review that align with the learning style profile.
   - Suggest ways to translate information into the preferred learning style format.

6. Multi-Modal Learning Integration:
   - Develop strategies to strengthen less dominant learning styles for a more balanced approach.
   - Create a study plan that incorporates all learning styles to reinforce understanding.

7. Customized Practice and Application:
   - Design practice exercises that cater to the primary learning styles while challenging other modalities.
   - Suggest real-world applications of the subject matter that align with kinesthetic or experiential learning.

8. Progress Monitoring and Adaptation:
   - Create a system for tracking the effectiveness of different learning strategies.
   - Provide guidelines for adjusting the plan based on ongoing performance and feedback.

9. Time Management Optimization:
   - Develop a study schedule that allocates time effectively across different learning style activities.
   - Suggest time management techniques that work well with the identified learning preferences.

10. Motivation and Engagement Boosters:
    - Recommend ways to increase motivation and engagement that resonate with the learning style profile.
    - Suggest goal-setting techniques that align with the student's preferences and subject area.

Conclude with a summary of the key strategies and a motivational message emphasizing the power of leveraging personal learning styles for academic success.`,
        slug: 'learning-style-optimizer',
        form: [
            {
                label: 'Visual Learning Score (0-10)',
                field: 'input',
                name: 'visualScore',
                type: 'number',
                required: true
            },
            {
                label: 'Auditory Learning Score (0-10)',
                field: 'input',
                name: 'auditoryScore',
                type: 'number',
                required: true
            },
            {
                label: 'Kinesthetic Learning Score (0-10)',
                field: 'input',
                name: 'kinestheticScore',
                type: 'number',
                required: true
            },
            {
                label: 'Reading/Writing Learning Score (0-10)',
                field: 'input',
                name: 'readingWritingScore',
                type: 'number',
                required: true
            },
            {
                label: 'Subject Area',
                field: 'input',
                name: 'subjectArea',
                required: true,
                placeholder: 'e.g., Calculus, World History, Computer Science'
            },
            {
                label: 'Current Study Challenges',
                field: 'textarea',
                name: 'challenges',
                required: true,
                placeholder: 'e.g., Difficulty focusing, trouble remembering formulas'
            },
            {
                label: 'Available Study Time (hours per week)',
                field: 'input',
                name: 'studyTime',
                type: 'number',
                required: true
            },
            {
                label: 'Learning Goals',
                field: 'textarea',
                name: 'learningGoals',
                required: true,
                placeholder: 'e.g., Improve grades, understand complex concepts deeply'
            }
        ]
    },
    {
        name: 'Exam Anxiety Management Plan',
        desc: 'Creates a personalized plan to manage exam anxiety and boost confidence.',
        category: 'Mental Health',
        icon: 'https://cdn-icons-png.flaticon.com/128/3997/3997872.png',
        aiPrompt: `Generate a comprehensive exam anxiety management plan for a student preparing for {examType}. Consider the following factors:

1. Anxiety Symptoms: Analyze the student's reported anxiety symptoms (physical, emotional, cognitive).
2. Exam Specifics: Type of exam, duration, format, and subject matter.
3. Past Experiences: The student's history with exam anxiety and any previous coping strategies.
4. Personal Strengths: Identify the student's strengths that can be leveraged to manage anxiety.
5. Available Resources: Time until the exam, study materials, support systems.

Create a detailed plan that includes:

1. Preparation Strategies:
   - Develop a realistic study schedule, breaking down material into manageable chunks.
   - Suggest evidence-based study techniques (e.g., spaced repetition, active recall).
   - Recommend practice tests or mock exams to build familiarity and confidence.

2. Anxiety Reduction Techniques:
   - Provide 3-5 specific relaxation exercises (e.g., deep breathing, progressive muscle relaxation).
   - Suggest mindfulness practices tailored for pre-exam and during-exam use.
   - Teach cognitive restructuring techniques to challenge anxious thoughts.

3. Physical Wellness:
   - Design a pre-exam sleep schedule to ensure proper rest.
   - Suggest a balanced diet plan to support brain function and reduce anxiety.
   - Recommend appropriate exercise routines to reduce stress and improve focus.

4. Exam Day Strategies:
   - Create a detailed exam day schedule, including preparation rituals.
   - Provide strategies for managing anxiety during the exam (e.g., grounding techniques).
   - Suggest post-exam decompression activities.

5. Long-term Anxiety Management:
   - Recommend resources for ongoing anxiety management (e.g., counseling, support groups).
   - Suggest ways to reframe the exam experience for future growth.

6. Emergency Interventions:
   - Provide quick anxiety-relief techniques for acute anxiety attacks.
   - Suggest when and how to seek immediate help if anxiety becomes overwhelming.

7. Positive Visualization:
   - Guide the creation of positive affirmations specific to exam success.
   - Outline a visualization exercise for calm and confident exam performance.

8. Support System Activation:
   - Suggest ways to communicate needs to friends, family, or teachers.
   - Recommend study group strategies that reduce anxiety rather than increase it.

Conclude with a motivational message emphasizing the student's ability to manage anxiety and perform well. Provide a daily anxiety check-in tool to track progress and adjust strategies as needed.`,
        slug: 'exam-anxiety-plan',
        form: [
            {
                label: 'Type of exam',
                field: 'input',
                name: 'examType',
                required: true,
                placeholder: 'e.g., Final Biology Exam, SAT, Medical Board Certification'
            },
            {
                label: 'Anxiety symptoms',
                field: 'textarea',
                name: 'anxietySymptoms',
                required: true,
                placeholder: 'Describe your physical, emotional, and cognitive anxiety symptoms'
            },
            {
                label: 'Exam duration',
                field: 'input',
                name: 'examDuration',
                required: true,
                placeholder: 'e.g., 2 hours, 3 hours'
            },
            {
                label: 'Exam format',
                field: 'input',
                name: 'examFormat',
                required: true,
                placeholder: 'e.g., online, in-person'
            },
            {
                label: 'Subject matter',
                field: 'input',
                name: 'subjectMatter',
                required: true,
                placeholder: 'e.g., History, Math, Biology'
            },
            {
                label: 'Past exam anxiety experiences',
                field: 'textarea',
                name: 'pastExamAnxiety',
                required: true,
                placeholder: 'Describe your past experiences with exam anxiety (severity, frequency, coping)'
            },
            {
                label: 'Past coping strategies',
                field: 'textarea',
                name: 'pastCopingStrategies',
                required: true,
                placeholder: 'What coping strategies have you used in the past, and were they effective?'
            },
            {
                label: 'Personal strengths',
                field: 'textarea',
                name: 'personalStrengths',
                required: true,
                placeholder: 'Identify your strengths (e.g., time management, study skills, perseverance)'
            },
            {
                label: 'Time until exam',
                field: 'input',
                name: 'timeUntilExam',
                required: true,
                placeholder: 'e.g., 2 weeks, 1 month'
            },
            {
                label: 'Study materials',
                field: 'textarea',
                name: 'studyMaterials',
                required: true,
                placeholder: 'What resources are available to you (e.g., textbooks, notes, practice problems)?'
            },
        ]
    },
    {
        name: 'Efficient Note-Taking Strategy Generator',
        desc: 'Creates personalized note-taking strategies for different learning scenarios.',
        category: 'Study Skills',
        icon: 'https://cdn-icons-png.flaticon.com/128/2541/2541988.png',
        aiPrompt: `Generate a personalized, efficient note-taking strategy for the following learning scenario:

Subject: {subject}
Learning Context: {context} (e.g., lecture, textbook reading, online course)
Primary Learning Goal: {goal} (e.g., exam preparation, long-term retention, project application)
Available Tools: {tools} (e.g., pen and paper, laptop, tablet)
Time Constraints: {timeConstraints} (e.g., 1-hour lecture, self-paced study)
Personal Preferences: {preferences} (e.g., visual learner, prefer summarization)

Develop a comprehensive note-taking strategy that includes:

1. Recommended Note-Taking Method:
   - Suggest a primary method (e.g., Cornell, mind mapping, outline) and explain why it's suitable for this scenario.
   - Provide a template or structure for implementing this method.

2. Pre-Note Preparation:
   - Outline steps to prepare for effective note-taking (e.g., preview material, set up note template).
   - Suggest ways to activate prior knowledge before the learning session.

3. Active Listening/Reading Techniques:
   - Provide tips for identifying and capturing key information.
   - Suggest methods for maintaining focus and engagement during the learning session.

4. Information Organization:
   - Describe how to structure notes for easy review and recall.
   - Include techniques for highlighting relationships between concepts.

5. Abbreviations and Symbols:
   - Suggest a set of abbreviations and symbols to increase note-taking speed.
   - Explain how to develop a personal shorthand system.

6. Visual Elements:
   - Recommend ways to incorporate diagrams, charts, or other visual aids.
   - Provide guidelines for creating effective visual notes.

7. Post-Session Review:
   - Outline a process for reviewing and elaborating on notes after the learning session.
   - Suggest methods for connecting new information to existing knowledge.

8. Technology Integration (if applicable):
   - Recommend digital tools or apps that complement the note-taking strategy.
   - Provide tips for effective use of chosen technology.

9. Collaboration and Sharing:
   - Suggest ways to compare and combine notes with peers for a more comprehensive understanding.
   - Outline a process for creating study groups or discussion sessions based on notes.

10. Long-Term Organization and Retrieval:
    - Provide a system for organizing notes for easy future reference.
    - Suggest methods for periodic review to reinforce learning.

11. Adaptability:
    - Explain how to modify the strategy for different topics or learning contexts within the subject.
    - Provide tips for refining the note-taking process based on personal experience and feedback.

Include examples and templates where appropriate to illustrate the recommended techniques. Conclude with tips for consistently applying and refining the note-taking strategy over time.`,
        slug: 'note-taking-strategy',
        form: [
            {
                label: 'Enter subject',
                field: 'input',
                name: 'subject',
                required: true,
                placeholder: 'e.g., World History'
            },
            {
                label: 'Learning context',
                field: 'select',
                name: 'context',
                options: ['Lecture', 'Textbook reading', 'Online course', 'Research paper', 'Lab experiment'],
                required: true
            },
            {
                label: 'Primary learning goal',
                field: 'input',
                name: 'goal',
                required: true,
                placeholder: 'e.g., Prepare for comprehensive final exam'
            },
            {
                label: 'Available tools (comma-separated)',
                field: 'input',
                name: 'tools',
                required: true,
                placeholder: 'e.g., Laptop, tablet, pen and paper'
            },
            {
                label: 'Time constraints',
                field: 'input',
                name: 'timeConstraints',
                required: true,
                placeholder: 'e.g., 90-minute lectures, twice a week'
            },
            {
                label: 'Personal preferences',
                field: 'textarea',
                name: 'preferences',
                required: true,
                placeholder: 'e.g., Visual learner, prefer summarization, struggle with staying organized'
            }
        ]
    },
    {
        name: 'Cognitive Load Optimizer',
        desc: 'Restructures complex information to reduce cognitive load and enhance understanding.',
        category: 'Learning Strategies',
        icon: 'https://cdn-icons-png.flaticon.com/128/2665/2665632.png',
        aiPrompt: `Analyze and restructure the following complex information on "{topic}" to optimize cognitive load and enhance understanding. Consider the user's background: {background} and current knowledge level: {currentLevel} (scale of 1-10).

1. Content Analysis:
   - Break down the main concept into 3-5 core components.
   - Identify any jargon or complex terms that need simplification.
   - Determine the logical flow and dependencies between ideas.

2. Cognitive Load Reduction:
   - Apply the following techniques to restructure the information:
     a) Chunking: Group related ideas into manageable "chunks".
     b) Scaffolding: Present information in a progressive sequence, building on prior knowledge.
     c) Dual Coding: Suggest visual representations to complement textual information.
     d) Worked Examples: Provide step-by-step examples for complex processes.
     e) Analogies and Metaphors: Create relatable comparisons to familiar concepts.

3. Presentation Format:
   - Outline a multi-modal presentation of the information, including:
     a) A high-level concept map or diagram.
     b) A simplified text explanation with clearly defined sections.
     c) Interactive elements (e.g., questions, mini-exercises) to reinforce key points.
     d) Suggestions for multimedia resources (e.g., video explanations, simulations).

4. Practice and Application:
   - Design 2-3 practice exercises or scenarios to apply the newly structured information.
   - Include self-assessment questions to check understanding at each stage.

5. Metacognitive Strategies:
   - Suggest reflection prompts to encourage deeper processing of the information.
   - Provide tips for connecting the new information to existing knowledge or real-world applications.

6. Customization:
   - Highlight areas where the explanation can be expanded or simplified based on the user's background and current level.
   - Suggest resources for further exploration of challenging subtopics.

Present the restructured information in a clear, logically flowing format. Include notes on how each restructuring decision addresses cognitive load concerns and enhances learning efficiency.`,
        slug: 'cognitive-load-optimizer',
        form: [
            {
                label: 'Enter the complex topic or concept',
                field: 'textarea',
                name: 'topic',
                required: true,
                placeholder: 'e.g., Quantum Entanglement in Particle Physics'
            },
            {
                label: 'Your educational/professional background',
                field: 'textarea',
                name: 'background',
                required: true,
                placeholder: 'e.g., Undergraduate Physics student with strong math skills'
            },
            {
                label: 'Current knowledge level of this topic (1-10)',
                field: 'input',
                name: 'currentLevel',
                type: 'number',
                required: true,
                placeholder: 'e.g., 3'
            }
        ]
    },
    {
        name: 'Procrastination Buster',
        desc: 'Helps overcome procrastination by breaking down tasks and addressing psychological barriers.',
        category: 'Productivity',
        icon: 'https://cdn-icons-png.flaticon.com/128/1875/1875660.png',
        aiPrompt: `Analyze the task "{task}" that the user is procrastinating on and create a comprehensive plan to overcome procrastination:
    
        1. Task Breakdown:
           - Divide the task into 5-7 smaller, manageable subtasks.
           - Estimate the time required for each subtask.
           - Identify any prerequisites or resources needed for each subtask.
    
        2. Psychological Analysis:
           - Explore potential reasons for procrastination (e.g., fear of failure, perfectionism, lack of clarity).
           - Suggest cognitive restructuring techniques to address negative thoughts or beliefs about the task.
    
        3. Motivation Boost:
           - Clarify the importance and benefits of completing the task.
           - Create a compelling vision of the positive outcomes upon task completion.
           - Suggest a personal reward system for making progress.
    
        4. Environment Optimization:
           - Recommend changes to the physical study/work environment to minimize distractions.
           - Suggest digital tools or apps that can help with focus and task management.
    
        5. Getting Started Ritual:
           - Design a 5-minute starting ritual to overcome initial resistance.
           - Provide a highly specific and easy first action to build momentum.
    
        6. Progress Tracking:
           - Create a visual progress tracker (describe how to set it up).
           - Suggest methods for celebrating small wins along the way.
    
        7. Accountability System:
           - Propose ways to involve an accountability partner or group.
           - Set up check-ins or deadlines for each subtask.
    
        8. Overcoming Obstacles:
           - Anticipate potential obstacles or setbacks.
           - Provide strategies for getting back on track if procrastination recurs.
    
        9. Mindfulness and Self-Compassion:
           - Include brief mindfulness exercises to increase task engagement.
           - Encourage self-compassionate self-talk to reduce procrastination-related stress.
    
        10. Long-term Habit Building:
            - Suggest ways to turn task completion into a positive habit.
            - Provide tips for applying these strategies to future tasks.
    
        Conclude with a motivational message and a call to action to start the first subtask immediately.`,
        slug: 'procrastination-buster',
        form: [
          {
            label: 'Enter the task you\'re procrastinating on',
            field: 'textarea',
            name: 'task',
            required: true,
            placeholder: 'e.g., Writing a 20-page research paper on climate change'
          }
        ]
      },
]