import React from "react";


const themes = [
{ name: "Blue", value: "theme-blue" },
{ name: "Dark", value: "theme-dark" },
{ name: "Light", value: "theme-light" },
{ name: "Pastel", value: "theme-pastel" },
];


export default function ThemeSwitcher({ theme, setTheme }) {
return (
<div className="fixed bottom-6 right-6 bg-white shadow-lg rounded-xl p-3 flex flex-col gap-2">
{themes.map((t) => (
<button
key={t.value}
onClick={() => setTheme(t.value)}
className={`px-4 py-2 rounded-lg font-medium transition ${
theme === t.value ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
}`}
>
{t.name}
</button>
))}
</div>
);
}