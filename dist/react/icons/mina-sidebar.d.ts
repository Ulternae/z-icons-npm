import React from 'react';

export interface MinaSidebarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSidebar: React.FC<MinaSidebarProps>;
export default MinaSidebar;
