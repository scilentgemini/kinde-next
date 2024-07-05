import { createPost } from "@/actions/actions"

export default function Form() {
  return (
    <form action={createPost} className="flex flex-col max-w-[400px] mx-auto gap-2 my-10">
        <input
          type="text"
          name="title"
          placeholder="Post Title"
          className="border rounded px-3 h-10"
          required
        />

        <textarea
          name="body"
          placeholder="Body Content for New Post"
          className="border rounded px-3 py-2"
          rows={10} 
          required
        />
        <button className="h-10 bg-purple-500 px-5 rounded text-white">
          Submit
        </button>
      </form>
  )
}
