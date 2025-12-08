import { useChatStore } from "../store/useChatStore"



function ActiveTabSwitch() {

  const { activeTab , setActiveTab } = useChatStore();



  return (
    <div className="active-tab-switch d-flex align-items-center justify-content-between p-4">
      <button className={`active-tab-btn rounded-pill ${activeTab === "chats" ? 'if-active-btn ': "active-tab-btn text-black"}`} onClick={()=> { 
        setActiveTab("chats")
        }}>

          <i class="bi bi-chat" style={{fontSize: "15px"}}></i> 
          <span style={{fontSize: '15px'}}>Chats</span>
      </button>

      <button className={`active-tab-btn rounded-pill ${activeTab === "contacts" ? 'if-active-btn' : "active-tab-btn text-black"}`} onClick={()=> {
        setActiveTab("contacts")
        }}>


        <i class="bi bi-person-lines-fill" style={{fontSize: "15px"}}></i>
        <span style={{fontSize: '15px'}}>Contacts</span>
        </button>





    </div>
  )
}

export default ActiveTabSwitch;