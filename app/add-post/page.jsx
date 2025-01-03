'use client'
import styles from '@/app/page.module.css'
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddPost(){
    const [formData, setFormData] = useState({
        title: '',
        content: ''
      });
    const router = useRouter();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log('Form submitted:', formData);
        try{
            await fetch('/api/add-post', {
                method:"POST", 
                headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: formData.title, content: formData.content})
        })
        router.refresh()
        }catch(e){
            console.error('Error submitting form:', e);
        }
        setFormData({ title: '', content: '' });
      };

    return (
        <main className={styles.main}>
            <Link href={'/'}>Feed</Link>
            <h1>
                Add a New Post
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                </div>
                <div>
                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                />
                </div>
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}