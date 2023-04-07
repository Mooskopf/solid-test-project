import config from "../config/config"
import styles from "../styles/quests.module.scss"
import Modal from "../components/QuestModal"
import { createSignal } from "solid-js"

function Quests() {

    const [addQuestActive, setAddQuestActive] = createSignal(false)
    const [editQuestActive, setEditQuestActive] = createSignal(false);
    const [quests, setQuests] = createSignal(config.quests)

    let questId = 0
    let questAuthor = ""
    let questTask = ""
    let idCounter = config.quests.length

    function closeAddQuest(data) {
        if (data) {
            setAddQuestActive(false)
        }
    }

    function closeEditQuest(data) {
        if (data) {
            setEditQuestActive(false)
        }
    }

    function addQuest(data) {
        idCounter++
        setQuests(quests => {
            return [...quests, { id: idCounter, author: data.author, task: data.task }]
        })
    }

    function finishQuest(id) {
        setQuests(quests().map((quest) => (
            quest.id === id ? { ...quest, done: true } : quest
        )))
    }

    function editQuest(id, author, task) {
        questId = id
        questAuthor = author
        questTask = task

        setEditQuestActive(true)
    }

    function questEdited(data) {
        setQuests(quests().map((quest) => (
            quest.id === questId ? { ...quest, author: data.author, task: data.task } : quest
        )))
    }

    return (
        <div>
            <div class={styles.quest_container}>
                <For each={quests()}>
                    {(quest) =>
                        !quest.done &&
                        <div>
                            <div class={styles.quest}>
                                <div class={styles.author}>{quest.author}</div>
                                <div class={styles.task}>{quest.task}</div>
                            </div>
                            <button class="btn-secondary" onClick={() => finishQuest(quest.id)}>Finish Quest</button>
                            <button class="btn-secondary" onClick={() => editQuest(quest.id, quest.author, quest.task)}>Edit Quest</button>
                        </div>
                    }
                </For>
                <button class="btn" style={{ "margin-top": "40px" }} onClick={() => setAddQuestActive(true)}>
                    New Quest!
                </button>
            </div>
            <Show when={addQuestActive()}>
                <Modal close={closeAddQuest} update={addQuest} idCounter={idCounter} edit={false} />
            </Show>
            <Show when={editQuestActive()}>
                <Modal close={closeEditQuest} update={questEdited} author={questAuthor} task={questTask} edit={true} />
            </Show>
        </div>
    )
}

export default Quests