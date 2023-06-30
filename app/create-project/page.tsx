import Modal from "@/components/Modal"
import ProjectForm from "@/components/ProjectForm"
import { getCurrentUser } from "@/lib/session"
import { redirect } from "next/navigation";

const CreateProject = async () => {
    const session = await getCurrentUser();
    
    if(!session?.user) redirect("/");

    return (
        <Modal>
            <h3 className="modal-head-text">
                Create New Project

                <ProjectForm type="create" session={session}/>
            </h3>
        </Modal>
    )
}

export default CreateProject
