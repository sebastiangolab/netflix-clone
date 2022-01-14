import './users.styles.css';
import user1 from 'assets/images/user-1.jpg';
import user2 from 'assets/images/user-2.jpg';
import user3 from 'assets/images/user-3.jpg';
import User from 'components/User/User';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const Users = () => (
   <>
      <div className="users">
         <Header />
         <div className="users__container">
            <h1 className="users__title">Who's watching?</h1>
            <div className="users-list">
               <User image={user1} name="Sebastian" />
               <User image={user2} name="Natalia" />
               <User image={user3} name="Mateusz" />
            </div>
         </div>
      </div>
      <Footer isUsers />
   </>
);

export default Users;
