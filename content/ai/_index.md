---
header:
  caption: ""
  image: ""
title: "Using AI in Your Research"
subtitle: "A starting point for EUI researchers"
view: 0
---

This page is a practical starting point for anyone at the EUI who wants to use AI in their research, including if you have never used it before. It builds on the [EUI Guidelines for the Responsible Use of AI for Research](https://www.eui.eu/Documents/ServicesAdmin/DeanOfStudies/ResearchEthics/2024.06-Ethics-Commitee-EUI-GENAI-DIGITAL.pdf), which set the rules for all EUI researchers, and on the Library's [Using AI FAQ](https://eui.libanswers.com/UsingAI), which answers practical questions such as how to declare and cite AI use. 

PhD researchers can also [book a one-on-one consultation](#book) with the Part-time Assistant Professors [Filip Olsson](https://www.eui.eu/people?id=filip-olsson) and [Roberto Valli](https://www.eui.eu/people?id=roberto-valli).

**On this page:** [About AI consultations](#service) · [What AI can and can't do](#basics) · [Getting started](#resources) · [Using AI responsibly at the EUI](#rules)

## About AI consultations {#service}

{{< qa id="help-with" q="What can I get help with?" >}}
Any question about whether and how to use AI in your own research. For example:

- **Choosing an AI-based method:** is AI a sensible way to code 2,000 open-ended survey responses, or to extract information from scanned archival documents?
- **Improving a workflow you already use:** how can I integrate AI-assistance when coding in R, Stata or Python, or preparing job applications?
- **Checking AI output:** what are the best practices to validate an AI-based classification against human coding?
- **Staying within the rules:** what can I ethnically share with a tool, and how to document and disclose its use?

Consultations are open to EUI PhD researchers. They complement your supervisor and do not replace them: the EUI Guidelines ask you to discuss plans to use AI in your research with your supervisor first. Ethics review, data-protection decisions and IT accounts are handled by other services (see [Who else can help?](#referrals)).
{{< /qa >}}

{{< qa id="what-to-expect" q="What happens in a consultation?" >}}
We spend 20 minutes on one research problem, either in person or on Teams. 

We will ask about your project, what you're trying to achieve and what data you're working with. Then we work out an approach, try it out where possible, and agree on concrete next steps.

{{< /qa >}}

{{< qa id="when-to-book" q="When should I book a consultation?" >}}
Book when you have a specific research problem that this page hasn't answered. For example:

- You are considering AI for part of your research method and want to discuss design and validation.
- You have tried a tool and the results are unreliable, or you can't tell whether they are.
- You want help setting up an AI-assisted workflow for coding, writing or working with the literature.
- You are unsure whether your planned use fits the EUI rules.

If you're not sure your question fits, read [What can I get help with?](#help-with) and then book. Concluding that AI is *not* worth it for your task is a useful outcome too.
{{< /qa >}}

{{< qa id="experience" q="Do I need any experience with AI?" >}}
No. We particularly encourage students without AI experience to use the consultations. 

All you need is research task and a question are enough. "I have never used these tools and don't know where to start" is a perfectly good reason to book.

Of course, preparing before the meeting is useful: the more precise the question, the more effective our help. For a very basic introduction, please read the section [What AI can and can't do](#basics) takes about ten minutes to read.
{{< /qa >}}

{{< qa id="prepare" q="How should I prepare?" >}}
When you book, you'll be asked for:

1. your research task, in two or three sentences
2. the specific question you'd like help with
3. what you've tried so far ("nothing yet" is fine)
4. what you'd like to leave the consultation with
5. what kind of data is involved, and how sensitive it is

Please **describe your data, but don't upload or send it**. If useful, bring a small example you are allowed to share, such as a few lines of code or an anonymized excerpt. Reading [What AI can and can't do](#basics) beforehand means we can spend the time on your problem.
{{< /qa >}}

{{< qa id="how-to-book" q="How do I book, and what follow-up is available?" >}}
Book a slot through [this Bookings link](https://bookings.cloud.microsoft/book/AIConsultationsEUI@EUI1.onmicrosoft.com/s/FuxpCCu3DkSMqxxbxt4Pug2?ismsaljsauthenabled). Consultations are open to EUI PhD researchers, last 20 minutes and focus on one research problem.

{{< /qa >}}

{{< qa id="referrals" q="Who else can help?" >}}
- **Your supervisor:** whether and how AI fits your research. The Guidelines ask you to talk to them first.
- **EUI Library:** literature search, citing AI, and research data management. See the [Using AI FAQ](https://eui.libanswers.com/UsingAI) and the [Research Data Guide](https://eui.libguides.com/research-data-guide/plan/dmp).
- **Data Protection Officer:** personal data in your project. Email [data_protection_officer@eui.eu](mailto:data_protection_officer@eui.eu) or see [Data Protection at the EUI](https://www.eui.eu/About/DataProtection).
- **Ethics Committee:** ethics review of research involving human participants. See [Ethics and Integrity in Academic Research](https://www.eui.eu/en/services/academic-service/ethics-and-integrity-in-academic-research).
- **ICT Service:** accounts, licenses and software installation. Get in touch via [EUI Helpdesk](https://www.eui.eu/Helpdesk).
{{< /qa >}}

## What AI can and can't do {#basics}

{{< qa id="two-ways" q="What is the difference between AI as an assistant and AI as a research method?" >}}
AI can be used *as an assistant* (debugging your R code, summarizing a paper you then read, polishing your own prose) just like using any other tool, or *as part of your research method* (having a model classify political speeches, code interview transcripts or extract variables from documents). In either case, it is your responsibility to check the output and remain responsible for its output. Usual good practices in research apply (is the output valid, are its errors systematic, and can someone else reproduce it?). See [Using AI as a method](#ai-as-method).
{{< /qa >}}

{{< qa id="what-is-genai" q="What is generative AI, in plain terms?" >}}
Tools such as ChatGPT, Claude, Gemini and Microsoft Copilot are built on *large language models*: statistical models trained on enormous amounts of text to predict which text is likely to come next. When you ask a question, the model generates an answer piece by piece, based on patterns learned in training and on whatever you give it: your prompt, uploaded files and sometimes web search results.

The recent advances in the capabilities of LLM tools derives from the integration of layers on top of this basic linguistic "understanding." These layers are calibrated to satisfy users and enabled the use of LLMs as agents who can execute tasks on machines. For an excellent introduction to what LLMs are and how they work, [watch this lecture by Elliott Ash](https://www.aeaweb.org/webcasts/2026/developments-in-language-models).

This explains both what these tools do well and how they typically fail. They have learned the patterns of a huge range of writing, so they are very good at producing fluent, plausible text and code. But plausible is not the same as true. The model has no built-in check that a statement or a reference is correct, so it can give confident, well-written answers that are wrong. Tools that search the web or work from documents you provide make this less frequent, but do not eliminate it.

Careful use of AI tools can, however, partially work around these limitations, by including tests, cross-evaluations of different AI tools, and careful prompt engineering.
{{< /qa >}}

{{< qa id="use-cases" q="What can AI help me do as a social scientist?" >}}
Common uses, roughly from lower to higher stakes:

- **Understanding material:** explaining a difficult method or concept, describing a complex repository or source code, getting the gist of a source in a language you don't read well.
- **Code and data:** writing and debugging R, Stata or Python code; cleaning and reshaping data; explaining error messages.
- **Writing:** improving the language of your own drafts, suggesting structure, drafting routine texts that you then rewrite.
- **Finding literature:** leads that you then verify in the Library's databases.
- **Transcription and documents:** transcribing recordings, extracting text or tables from scanned documents. Read [the rules on sensitive data](#sensitive-data) first.
- **Research method:** classifying or coding large amounts of text, extracting information from documents. See [Using AI as a method](#ai-as-method).

The EUI Guidelines also recognize that these tools can support inclusion, for example for researchers writing in a second language or with dyslexia (Section III).
{{< /qa >}}

{{< qa id="use-cases" q="What are generative and agentic AI?" >}}
Even though they share much of the underlying structure, generative AI creates content in response to a prompt, while agentic AI takes independent actions to achieve a larger, multi-step goal.

- **Generative AI:** Gen-AI use LLMs to process inputs such as prompts text, images, video and produce outputs that respond to the prompts. Interactions with generative AI typically take the form of a conversation or chat.
Examples of generative AI:
    - Gemini
    - OpenAI ChatGPT
    - NotebookLLM

- **Agentic AI:** AI agents are, as the name implies, LLM-based software that can execute actions on a machine (typically your computer) based on your prompt. Once granted permissions, it can create and delete folders and files, use other software via command line. Most importantly, it can read its own outputs, evaluate them, and iteratively improve its actions until a goal is achieved.
Examples of agentic AI:
    - Claude Code
    - Cursor
    - OpenAI Codex

{{< /qa >}}

{{< qa id="limitations" q="What are its main limitations?" >}}
- **Fabrication:** invented references, quotations, statistics or facts, presented as confidently as true ones. Never cite a source you haven't found and read yourself.
- **Unsupported claims:** summaries can add points that aren't in the text, or drop important caveats.
- **Plausible but wrong code and analysis:** code that runs without errors can still do the wrong thing, for example by silently dropping observations in a merge.
- **Bias:** models reflect their training data, which over-represents some languages, regions and viewpoints. The EUI Guidelines point in particular to biases favoring gender and racial majorities (Section IV.C).
- **Uneven performance:** quality drops for less widely used languages, historical texts, specialized topics and recent events.
- **Inconsistency:** the same prompt can give different answers, and providers update their models without notice. This matters for reproducibility.
{{< /qa >}}

{{< qa id="worth-it" q="How do I decide whether AI is worth using for a task?" >}}
Ask four questions:

1. **Do I know how the output should look like?** AI can be very efficient in implementing things that you know how to do and can describe precisely. It performs worst on vague and open-ended tasks.
2. **Can I check the output?** AI is most useful when checking an answer is much easier than producing it: code you can test, a translation you can read, a summary of a paper you know.
3. **How good are AI tools at this task?** LLM-based tools are in continuous evolution, and their performance varies quite a bit across different tasks. Check the state of the art before using a tool: for instance, [this website collects published evaluations of LLM performance](http://what-llms-can-not-do.github.io) across tasks.
4. **What would a mistake cost?** A clumsy sentence in an email is harmless. A fabricated citation in your thesis, or a misclassified variable in your main analysis, is not.
5. **Does checking take longer than doing it myself?** If you have to verify every line anyway, the tool may not save you any time.

A task that passes all three tests is a good candidate. If you are unsure, try the tool on a small sample where you already know the right answer.
{{< /qa >}}

{{< qa id="ai-as-method" q="What extra care is needed when AI is part of my research method?" >}}
When a model produces your data (classifying texts, coding interviews, extracting variables), treat it as a measurement instrument and document it like one.

- **Validate it against human judgment.** Hand-code a random sample and report how often the model agrees, as you would for a second human coder.
- **Look for systematic error, not just average accuracy.** Does the model do worse for some groups, languages or time periods? Errors that correlate with your variables of interest can bias your estimates.
- **Make it reproducible.** Record the exact model and version, the full prompt, settings such as temperature, and the date. Prefer models with fixed versions, or open-weight models you can run yourself, because hosted models change over time. The EUI Guidelines ask you to document the tool and prompts where outputs cannot be replicated (Section IV.D).
- **Check the data rules** before sending research material to any tool: see [Can I upload interview transcripts…?](#sensitive-data)
- **Talk to your supervisor.** The EUI Guidelines ask you to consult them before incorporating AI into your research (Section V).
{{< /qa >}}

## Getting started {#resources}

{{< qa id="tools" q="Which AI tools can I use through the EUI?" >}}
TBD

{{< /qa >}}

{{< qa id="prompting" q="How can I get more useful answers from an AI tool?" >}}
- **Give context:** who you are, what the task is for and what you already know. "I'm a political science PhD researcher estimating a panel regression in R…" works better than a bare question.
- **Say what you want back:** format, length, level of detail, what to leave out.
- **Provide the material:** paste the code, the error message or the passage (if you are allowed to share it) rather than describing it.
- **Iterate:** treat the first answer as a draft. Ask follow-up questions, point out errors, ask for alternatives.
- **Ask about uncertainty:** "Which parts of this are you least sure about?" or "What would a critical reviewer say?"
- **Start a new conversation** when you switch tasks, so earlier context doesn't carry over.
{{< /qa >}}

{{< qa id="verification" q="How do I check AI-generated text, references and code?" >}}
- **References:** look up every source in the Library catalogue or Google Scholar, open it, and confirm it says what the AI claims. Fabricated references often look entirely plausible.
- **Facts and summaries:** compare them with the original. Look for claims that aren't in the source and for caveats that went missing.
- **Code:** run it on a small example where you know the right answer, check the number of observations at each step, and ask for an explanation of any line you don't understand.
- **Your own text after AI editing:** reread it for changes in meaning, not just style. "Improved" sentences can shift or overstate your argument.

The EUI Guidelines require you to verify AI output and to look for sources beyond those an AI tool suggests (Section IV.C).
{{< /qa >}}

{{< qa id="further-reading" q="Where can I learn more?" >}}
- [**EUI Library: Using AI FAQ**](https://eui.libanswers.com/UsingAI): short answers on declaring and citing AI use, literature search and language correction. For everyone at the EUI.
- [**EUI Guidelines for the Responsible Use of AI for Research**](https://www.eui.eu/Documents/ServicesAdmin/DeanOfStudies/ResearchEthics/2024.06-Ethics-Commitee-EUI-GENAI-DIGITAL.pdf): the official rules, about ten pages. For everyone at the EUI.
- [**EUI Guide on Good Data Protection Practice in Research**](https://www.eui.eu/Documents/AboutEUI/Organization/DataProtection/DPO-Good-Data-Protection-Practice-DIGITAL.pdf): what counts as personal data, anonymization and cloud services. For anyone working with data about people.
- [**European Commission: Living guidelines on the responsible use of generative AI in research**](https://research-and-innovation.ec.europa.eu/document/2b6cf7e5-36ac-41cb-aab5-0d32050143dc_en): the European reference framework, updated regularly. For the wider picture, including what funders expect.


## Using AI responsibly at the EUI {#rules}

In this section, {{< label rule >}} indicates a rule from the EUI Guidelines or another EUI policy, with the section number; {{< label check >}} something that depends on your program, supervisor, publisher or funder; or {{< label advice >}} practical advice.

{{< qa id="eui-rules" q="Which EUI rules apply to me?" >}}
{{< label rule >}} The main document is the [EUI Guidelines for the Responsible Use of AI for Research](https://www.eui.eu/Documents/ServicesAdmin/DeanOfStudies/ResearchEthics/2024.06-Ethics-Commitee-EUI-GENAI-DIGITAL.pdf), approved by the Academic Council in May 2024. They cover PhD researchers, Master's students, research assistants, fellows and faculty (Section I). The EUI [Code of Ethics in Academic Conduct and Research](https://www.eui.eu/Documents/ServicesAdmin/DeanOfStudies/Code-of-Ethics-in-Academic-Conduct-and-Research.pdf) (2025) expects all members of the academic community to know and follow them. In short:

- **You are responsible** for everything you submit, including errors or plagiarism introduced by an AI tool (Section IV).
- **No AI detection.** The EUI does not use AI-detection software, because of its false positives, and relies on individual responsibility instead. Misuse is treated like plagiarism under the Code of Ethics (Sections IV, IV.B).
- **Data-protection rules still apply.** The [EUI Data Protection Policy](https://www.eui.eu/Documents/AboutEUI/Organization/PresidentDecisionOnPrivacy.pdf) (President's Decision 10/2019) and GDPR principles apply to AI use as to anything else (Section IV.G).

{{< label check >}} Your program, supervisor, course instructors, publishers and funders may set stricter rules. The Guidelines note that AI-generated content may not meet the requirements of a study program unless explicitly allowed (Section V).
{{< /qa >}}

{{< qa id="sensitive-data" q="Can I upload interview transcripts, survey data, archival documents or unpublished work?" >}}
**Not if they contain personal or confidential data, unless the tool meets the EUI's data-protection requirements. When in doubt, don't upload.**

{{< label rule >}} You must not enter confidential or personal data into an AI tool unless this complies with the GDPR and the EUI Data Protection Policy. The Guidelines single out AI transcription of interviews as needing particular care (Sections IV.D, IV.G). Personal data include not only names but anything that can identify a person, such as occupation, location, a voice or a photo. For any cloud service that processes personal data, the EUI [Guide on Good Data Protection Practice in Research](https://www.eui.eu/Documents/AboutEUI/Organization/DataProtection/DPO-Good-Data-Protection-Practice-DIGITAL.pdf) (section 6.3.1) requires that:

- the provider processes the data only on the EUI's instructions
- processing takes place within the EU
- a binding contract guarantees both

{{< label advice >}} Before uploading anything, ask yourself:

1. **Does it contain personal data?** Interview transcripts and recordings almost always do, even once names are removed. So do many survey and archival sources.
2. **What have you promised?** Consent forms, ethics approvals, data-use agreements and archive terms may restrict where the data can go.
3. **Where will it be processed, and will it be used for training?** Tools you sign up for with a personal account generally offer none of the guarantees above: there is no contract with the EUI, data may be processed outside the EU, and your inputs may be used to train future models unless you opt out.
4. **Can you avoid the problem?** Work with anonymized extracts, invented examples with the same structure, or a model that runs entirely on your own computer.

Your own unpublished work raises fewer legal issues. Other people's unpublished work, such as a manuscript you are reviewing, is confidential: don't upload it.

For advice on a specific project, contact the EUI [Data Protection Officer](mailto:data_protection_officer@eui.eu). The Library's guide to [processing personal data](https://eui.libguides.com/research-data-guide/protection-ethics-copyright/processing-personal-data) is a good first read.
{{< /qa >}}

{{< qa id="thesis" q="Can I use AI to help write or revise my thesis?" >}}
**Yes for some tasks, no for others.**

{{< label rule >}}

- **Allowed:** language and grammar correction of your own text, "including extensive re-writing and paraphrasing, provided the original text is their own". The Guidelines treat this like other grammar software, not as plagiarism (Section IV.E).
- **Not allowed:** having AI "autonomously write substantial or integral parts" of a dissertation, paper or other academic work (Section IV.B).
- **Must be acknowledged:** any new content produced by AI, including text, images, data and code (Section IV.B).
- **Keep your work distinguishable.** You must be able to tell your own contribution apart from the AI's (Sections IV.B, V), and you should consult your supervisor before incorporating AI into your research (Section V).

{{< label advice >}} A rule of thumb: the arguments, interpretation and analysis must be yours, and AI can help you express them. If you could not explain and defend a passage without the tool, it is not yet your work. Keep your own drafts so you can show how the text developed.

{{< label check >}} Agree with your supervisor on what is acceptable in your field and keep a written note of what you agreed.
{{< /qa >}}

{{< qa id="disclosure" q="When and how should I disclose AI use?" >}}
{{< label rule >}} The Guidelines distinguish three cases:

- **Inspiration.** AI that only inspired your own writing, such as brainstorming, need not be mentioned, but you should acknowledge it if you are asked to declare AI use (Section IV.A).
- **Generated content.** Text, images, data or code generated by AI must be acknowledged and referenced (Section IV.B).
- **Publications.** Follow the publisher's own AI policy (Section IV.F).

{{< label check >}} Your program may require a specific declaration. The Library FAQ explains [how to declare AI use](https://eui.libanswers.com/UsingAI/faq/287430) in an "AI Acknowledgement": the tool and version, how you used it, why, and how you modified the output. It also explains [how to cite AI tools](https://eui.libanswers.com/UsingAI/faq/287441). Journals differ: most do not accept an AI tool as an author, and many ask for a statement in the methods section or the acknowledgements.

{{< label advice >}} An example acknowledgement:

> *I used ChatGPT (GPT-5, OpenAI; accessed March 2026) to suggest language improvements to Chapters 2 and 4 and to help debug the R code for the analyses in Chapter 3. I reviewed and edited all suggestions; the arguments, analysis and interpretation are my own.*
{{< /qa >}}

{{< qa id="records" q="What should I keep a record of?" >}}
{{< label rule >}} The Guidelines ask you to keep track of AI contributions and document how your research developed (Section IV.A). Where AI outputs cannot be replicated, record the tool and the prompts you used (Section IV.D).

{{< label advice >}} A simple log is enough: a text file or spreadsheet with one line per substantial use, recording:

- the date
- the tool and version
- what you asked
- what you used from the output
- how you checked it

When AI is part of your method, also keep the full prompts, settings and outputs with your replication materials. A log makes disclosure easy and protects you if questions come up later.
{{< /qa >}}

---

Spotted an error or something out of date? Shoot me an email: [roberto.valli@eui.eu](mailto:roberto.valli@eui.eu)!

Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
