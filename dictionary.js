const enToTe = {
  "hello": "హలో",
  "hi": "హాయ్",
  "good morning": "శుభోదయం",
  "good afternoon": "శుభ మద్యాహ్నం",
  "good evening": "శుభ సాయంత్రం",
  "good night": "శుభ రాత్రి",
  "how are you": "నీవు ఎలా ఉన్నావు",
  "i am fine": "నేను బాగున్నాను",
  "thank you": "ధన్యవాదాలు",
  "sorry": "క్షమించండి",
  "please": "దయచేసి",
  "yes": "అవును",
  "no": "కాదు",
  "ok": "సరే",
  "welcome": "స్వాగతం",

  "water": "నీరు",
  "food": "ఆహారం",
  "rice": "అన్నం",
  "milk": "పాలు",
  "tea": "టీ",
  "coffee": "కాఫీ",
  "breakfast": "ఉదయం భోజనం",
  "lunch": "మధ్యాహ్న భోజనం",
  "dinner": "రాత్రి భోజనం",

  "what is your name": "నీ పేరు ఏమిటి",
  "my name is": "నా పేరు",
  "where are you from": "నువ్వు ఎక్కడ నుండి వచ్చావు",
  "i am from india": "నేను భారతదేశం నుండి వచ్చాను",
  "how old are you": "నీ వయస్సెంత",
  "i am a student": "నేను ఒక విద్యార్థిని",
  "i am learning telugu": "నేను తెలుగు నేర్చుకుంటున్నాను",

  "open the door": "తలుపు తెరువు",
  "close the door": "తలుపు మూసేయి",
  "come here": "ఇక్కడికి రా",
  "go there": "అక్కడికి వెళ్లు",
  "sit down": "కూర్చో",
  "stand up": "లేచి నిలబడు",
  "wait": "వేచి ఉండు",
  "stop": "ఆపు",
  "help me": "నాకు సహాయం చేయి",

  "today": "ఈ రోజు",
  "tomorrow": "రేపు",
  "yesterday": "నిన్న",
  "now": "ఇప్పుడు",
  "later": "తరువాత",

  "happy": "సంతోషంగా",
  "sad": "విషాదంగా",
  "angry": "కోపంగా",
  "tired": "అలసిపోయాను",
  "i am busy": "నేను బిజీగా ఉన్నాను",
  "i am free": "నేను ఖాళీగా ఉన్నాను",

  "computer": "కంప్యూటర్",
  "mobile": "మొబైల్",
  "internet": "ఇంటర్నెట్",
  "school": "పాఠశాల",
  "college": "కళాశాల",
  "teacher": "గురువు",
  "student": "విద్యార్థి",
  "book": "పుస్తకం",
  "pen": "కలము",
  "exam": "పరీక్ష"
};

const teToEn = {};
for (let key in enToTe) {
  teToEn[enToTe[key]] = key;
}
