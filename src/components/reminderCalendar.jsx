import "../Reminder.css"
import "bootstrap/dist/css/bootstrap.min.css"
import InputReminder from "./inputReminder"
import { getStartDateWeek, divideByDays } from "../Helpers/function"
import Header from "./Header"

const ReminderCalendar = props => {
	let taskWeek = {}
	
	const assignTaskWeek = () => {
		let startWeek = getStartDateWeek(new Date())
		let nextDay = new Date(startWeek)
		const forOneDay = {}
		for (let i = 0; i < 7; i++) {
			nextDay.setDate(startWeek.getDate() + i)
			const weekDay = divideByDays(props.tasks, nextDay)
			// console.log(weekDay, nextDay)
			forOneDay[i] = weekDay
		}
		return forOneDay
	}
	taskWeek = assignTaskWeek()

	return (
		<div className="calendar">
			<Header setSeach={props.setSeach} setNewTask={props.setNewTask} />

			<div className="calendar-week">
				<h2 className="headerCalendar">Zadania na ten tydzień</h2>
			</div>
			<div className="week">
				<div className="day">
					<span>Poniedziałek</span>
					<InputReminder tasksForTheDay={taskWeek[0]} tasks={props.tasks} />
				</div>
				<div className="day">
					<span>Wtorek</span>
					<InputReminder tasksForTheDay={taskWeek[1]} tasks={props.tasks} />
				</div>
				<div className="day">
					<span>Środa</span>
					<InputReminder tasksForTheDay={taskWeek[2]} tasks={props.tasks} />
				</div>
				<div className="day">
					<span>Czwartek</span>
					<InputReminder tasksForTheDay={taskWeek[3]} tasks={props.tasks} />
				</div>
				<div className="day">
					<span>Piątek</span>
					<InputReminder tasksForTheDay={taskWeek[4]} tasks={props.tasks} />
				</div>
				<div className="day">
					<span>Sobota</span>
					<InputReminder tasksForTheDay={taskWeek[5]} tasks={props.tasks} />
				</div>
				<div className="day">
					<span>Niedziela</span>
					<InputReminder tasksForTheDay={taskWeek[6]} tasks={props.tasks} />
				</div>
			</div>
		</div>
	)
}

export default ReminderCalendar
