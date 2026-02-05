
import React from 'react';

interface EditableTextProps {
  value: string;
  onChange: (val: string) => void;
  isEditMode: boolean;
  className?: string;
  multiline?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export const EditableText: React.FC<EditableTextProps> = ({ 
  value, 
  onChange, 
  isEditMode, 
  className = "", 
  multiline = false,
  as: Component = 'span'
}) => {
  if (!isEditMode) {
    return <Component className={className}>{value}</Component>;
  }

  if (multiline) {
    return (
      <textarea
        className={`w-full bg-amber-50 border border-amber-200 rounded p-1 outline-none ring-2 ring-amber-300 ${className}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }

  return (
    <input
      className={`bg-amber-50 border border-amber-200 rounded p-1 outline-none ring-2 ring-amber-300 ${className}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};