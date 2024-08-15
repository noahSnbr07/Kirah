interface IconProps {
   icon: string;
   title?: string;
   alt?: string;
   className?: string;
};

export default function Icon({ icon, title = `icon ${icon}`, alt = `icon ${icon}`, className }: IconProps) {
   return (
      <img
         draggable={false}
         title={title}
         alt={alt}
         src={icon}
         className={className}
         loading='lazy' />
   );
}