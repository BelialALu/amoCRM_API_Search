import { useState } from "react";

function AdvancedSearch() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setOpen(!open)}>
                Расширенный поиск
            </button>

            {open && (
                <div>
                    <label>
                        Метод запроса:
                    </label>

                    <select>
                        <option>Все</option>
                        <option>GET</option>
                        <option>POST</option>
                        <option>PATCH</option>
                        <option>DELETE</option>
                    </select>
                </div>
            )}
        </div>
    );
}

export default AdvancedSearch;