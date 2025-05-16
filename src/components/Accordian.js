
import ListItems from './ListItems';

const Accordion = ({title, open, set}) => {
   
    const show = ()=>{
        set()
    }
    return (
        <div  className="Accordian_container">
            <div  className="accordion-header">
                <h3 style={{ margin: 0, fontSize: '18px' }}>{title}</h3>
                <button onClick={show} className='accordion-button' >
                    Show
                </button>
            </div>
            {
                open && <ListItems/>
            }
            
        </div>
    );
};

export default Accordion;
