import { Calendar, Check, Edit3, Trash2 } from 'lucide-react'
import React, { useState } from 'react'

function TodoItem({ todo, index }) {
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    return (
        <div className={`group p-4 hover:bg-gray-100 transition-all duration-200 ${isDeleting ? "opacity-0 transform scale-95" : "opacity-100 transform scale-100"} ${todo.completed ? "opacity-75" : ""}`}>
            <div className='flex items-start gap-3'>
                {/* Toggle button */}
                <button className='flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 mt-0.5'>
                    <Check size={14} />
                </button>

                {/* Todo content */}
                <div className='flex-1 min-w-0'>
                    <div className={`text-gray-800 leading-relaxed`}></div>
                    <div className='flex items-center gap-4 mt-2 text-xl text-gray-600'>
                        <div className='flex items-center gap-1'>
                            <Calendar size={12} />
                            <span>Created </span>
                        </div>
                        <span>Updated </span>
                    </div>
                </div>

                {/* Action buttons */}
                <div className='flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-200'>
                    <button className='p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-200 rounded-lg transition-all duration-200'>
                        <Edit3 size={16} />
                    </button>
                    <button className='p-2 text-gray-500 hover:text-red-600 hover:bg-gray-200 rounded-lg transition-all duration-200'>
                        <Trash2 size={16} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem