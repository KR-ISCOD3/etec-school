
function FormMessage() {
  return (
    <div className='py-20 text-center'>
        <div className='w-[95%] sm:w-[60%] lg:w-[50%] mx-auto'>
            <h1 className='text-2xl'>Contact Us</h1>
            <form action="">
                <input 
                    placeholder='Name' type="text" name="" id="" 
                    className='w-full border border-blue-950 rounded-sm p-2 my-2 text-blue-950 outline-none' />
                <input 
                    placeholder='Email' type="email" name="" id="" 
                    className='w-full border border-blue-950 rounded-sm p-2 my-2 text-blue-950 outline-none' />
                <textarea 
                    rows={5} name="" id="" 
                    placeholder='Message'
                    className='resize-none w-full border border-blue-950 rounded-sm p-2 my-2 text-blue-950 outline-none'>
                </textarea>
                <div className="flex justify-end">
                    <button className="text-sm sm:text-lg bg-gray-400 px-4 py-2 rounded-3xl 
                    text-white hover:bg-gray-500 transition-all mr-2">
                        Cancel
                    </button>
                    <button className="text-sm sm:text-lg bg-blue-950 px-4 py-2 rounded-3xl 
                    text-white hover:bg-blue-900 transition-all">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default FormMessage
