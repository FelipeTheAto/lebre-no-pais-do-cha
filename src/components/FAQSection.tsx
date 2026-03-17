import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";

const faqs = [
  {
    question: "É realmente gratuito? Como isso é possível?",
    answer: "Sim, o acesso é 100% gratuito em todas as sessões. O espetáculo é um projeto aprovado e viabilizado pelo Governo do Estado do Paraná – Secretaria de Estado da Cultura, com recursos da Política Nacional Aldir Blanc (PNAB), do Ministério da Cultura – Governo Federal. Esta iniciativa garante a democratização do acesso à cultura de alta qualidade, permitindo que discussões fundamentais sobre saúde mental e relações interpessoais cheguem à comunidade sem qualquer barreira financeira."
  },
  {
    question: "Preciso reservar antes ou posso apenas chegar no local?",
    answer: "Embora não haja cobrança de ingressos, a reserva antecipada é indispensável. A capacidade física dos teatros é limitada por sessão, e o interesse por este projeto inédito tem sido alto devido à sua temática urgente. Garantir seu lugar pelo site é a única forma de assegurar sua participação e, claro, não perder a recepção imersiva surpresa que preparamos para quem chega 30 minutos antes do espetáculo."
  },
  {
    question: "O espetáculo é um monólogo? Vou apenas ouvir alguém falar?",
    answer: "Muito mais que um monólogo tradicional, \"Lebre no País do Chá\" é construído sobre elementos de solilóquio. Isso significa que você não está apenas assistindo a uma personagem, mas \"invadindo\" a consciência da Lebre de Março no momento em que ela tenta organizar seus próprios fragmentos. É um mergulho visceral onde o texto e o movimento da bailarina revelam segredos que raramente temos coragem de dizer em voz alta."
  },
  {
    question: "Por que recomendam chegar com 30 minutos de antecedência?",
    answer: "Porque a experiência não começa quando as portas do teatro se abrem, mas sim no momento em que você cruza a porta para o hall. Preparamos uma recepção surpresa exclusiva para o público que chegar cedo. É um elemento imersivo desenhado para desconectar você do mundo lá fora e sintonizar sua percepção com o clima da mesa de chá antes mesmo da peça começar. Não se atrase, não espere o chá esfriar."
  },
  {
    question: "Preciso ter lido \"Alice no País das Maravilhas\" para entender o espetáculo?",
    answer: "Não é necessário. Embora a peça subverta o clássico de Lewis Carroll, ela utiliza esse universo apenas como uma metáfora lúdica para tratar de algo profundamente humano: as nossas amizades. Se você já teve uma relação que te drenou emocionalmente ou uma amizade que parecia uma armadilha, você entenderá cada segundo da jornada da Lebre. É um espetáculo sobre a vida real, mascarado de fantasia."
  },
];


const FAQSection = () => {
  return (
    <section className="py-16 md:py-32 bg-gradient-to-b from-[hsl(30,60%,78%)] to-[hsl(30,70%,74%)]">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-foreground text-center">

            Perguntas <span className="font-cursive text-primary text-3xl sm:text-4xl font-extrabold">Frequentes</span>
          </motion.h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}>

                <AccordionItem
                value={`item-${i}`}
                className="border border-foreground/10 rounded-sm px-6 data-[state=open]:border-primary/30">

                  <AccordionTrigger className="font-display text-lg font-bold text-foreground hover:text-primary hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            )}
          </Accordion>
        </div>
      </div>
    </section>);

};

export default FAQSection;