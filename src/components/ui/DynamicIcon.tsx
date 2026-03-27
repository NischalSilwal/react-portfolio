
interface DynamicIconProps {
  icon: string;
  size?: number | string;
  className?: string; // Wrapper class
  imgClassName?: string; // Direct img class
  monochrome?: boolean; // Whether to apply dark:invert and brightness logic
}

/**
 * Renders an image icon (from URL) or an emoji icon based on input.
 * If the icon string starts with http or /, it's treated as a URL.
 */
export function DynamicIcon({ 
  icon, 
  size = 30, 
  className = '', 
  imgClassName = '',
  monochrome = false
}: DynamicIconProps) {
  const isUrl = icon.startsWith('http') || icon.startsWith('/') || icon.includes('.');

  const monoClasses = monochrome 
    ? "dark:invert brightness-0 dark:brightness-100 dark:opacity-90" 
    : "";
  const containerStyle = {
    width: typeof size === 'number' ? `${size}px` : size,
    height: typeof size === 'number' ? `${size}px` : size,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  if (isUrl) {
    return (
      <div 
        className={`flex-shrink-0 ${className}`} 
        style={containerStyle}
      >
        <img
          src={icon}
          alt="icon"
          width={size}
          height={size}
          className={`object-contain transition-all ${monoClasses} ${imgClassName}`}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div 
      className={`flex-shrink-0 ${className}`} 
      style={containerStyle}
    >
      <span 
        style={{ fontSize: typeof size === 'number' ? `${size * 0.8}px` : size }}
        className={imgClassName}
      >
        {icon}
      </span>
    </div>
  );
}
