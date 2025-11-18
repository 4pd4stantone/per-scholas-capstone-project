import './CreateEvent.css'


export default function CreateEvent() {


    return (
        <main >
            <section >
                <h2 id='create-event-title'>Create New Event</h2>
                <p id='create-event-subtitle'>Create a new dance event.</p>
                <h2 id='choose-event-type-title'>Choose Your Event Type</h2>
                <p id='choose-event-type-subtitle'>Select the type of event you're hosting. This will determine the available features and options for your event.</p>
            </section>
            <form action="submit" method="POST">
                <div>
                    <div className='event-type-box-row'>
                        <label >
                            <div className='event-type-radio-box'>
                            <input type="radio" name='evnetType' className='event-type-radio-btns' value='Dance Studio Social'/>
                            Dance Studio Social
                            </div>
                        </label>
                        <label >
                            <div className='event-type-radio-box'>
                            <input type="radio" name='evnetType' className='event-type-radio-btns' value='Club Social'/>
                            Club Social
                            </div>
                        </label>
                    </div>
                     <div className='event-type-box-row'>
                        <label >
                            <div className='event-type-radio-box'>
                            <input type="radio" name='evnetType' className='event-type-radio-btns' value='Outdoor Social'/>
                            Outdoor Social
                            </div>
                        </label>
                        <label >
                            <div className='event-type-radio-box'>
                            <input type="radio" name='evnetType' className='event-type-radio-btns' value='Congress/Festival'/>
                            Congress/Festival
                            </div>
                        </label>
                    </div>
                </div>
                {/* full forms will go here */}
                <div>
                    <button id='create-event-submit-btn'>Create Event</button>
                </div>
            </form>
        </main>
    )
}