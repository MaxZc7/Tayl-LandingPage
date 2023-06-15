import ClientCard from '../recourse/clientCard';
import client1 from '../assets/customer1.jpg';
import client2 from '../assets/customer2.jpg';
import client3 from '../assets/customer3.jpg';
import client4 from '../assets/customer4.jpg';
import client5 from '../assets/customer5.jpg';

export default function ClientOpinions() {
  return (
    <div className="h-screen w-full mt-20" id="Clients">
      <div className="flex flex-col gap-4">
        <div className="text-center text-5xl font-semibold text-slate-700 uppercase">
          <h4>Opinons of our</h4>
        </div>
        <div className="text-center text-5xl font-semibold text-slate-700 uppercase">
          <strong className="gradient-txt">CLIENTS</strong>
        </div>
      </div>
      <div className="flex   max-w-[1250px] max-h-[500px] mx-auto gap-16 py-10  mt-20  overflow-x-scroll overflow-hidden">
        <div>
          <ClientCard
            image={client1}
            name={'Linda Larson'}
            job={'Manager'}
            description={
              '"The service exceeded my expectations. I hired this company to improve the sales of my startup and I am very satisfied. Their strategic and personalized approach really made the difference."'
            }
          ></ClientCard>
        </div>
        <div>
          <ClientCard
            image={client2}
            name={'Adam Jonson'}
            job={'Developer'}
            description={
              'I was impressed with the security and reliability they offer. Protecting my data and confidentiality were paramount to me, and this company did not disappoint.'
            }
          ></ClientCard>
        </div>
        <div>
          <ClientCard
            image={client3}
            name={'Marry Hudson'}
            job={'Designer'}
            description={
              '!Great job on optimizing my brand! This company perfectly understood my needs and managed to develop a visual identity and communication strategy that captured the essence of my startup.'
            }
          ></ClientCard>
        </div>
        <div>
          <ClientCard
            image={client4}
            name={'Stella Larson'}
            job={'Stylist'}
            description={
              '"Hiring this company was one of the best decisions I made for my startup. Their guarantee of results gave me the necessary confidence, and they met and exceeded my expectations."'
            }
          ></ClientCard>
        </div>
        <div>
          <ClientCard
            image={client5}
            name={'Paul Harrison'}
            job={'Photographer'}
            description={
              '"This company turned out to be the ideal partner to improve my sales. His level of commitment and personalized attention was exceptional. Also, their focus on security and data protection gave me peace of mind."'
            }
          ></ClientCard>
        </div>
      </div>
    </div>
  );
}
