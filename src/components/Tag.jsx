import styles from '../styles/components/tag.module.css'

function Tag({ tagData }) {

    return (
        <div className={styles.main__tags__container}>
            {tagData.map((tag, index) => {
                return <div key={index} className={styles.main__tag__container}>
                    <p>{tag}</p>
                </div>;
            })}
        </div>
    )

}

export default Tag;
