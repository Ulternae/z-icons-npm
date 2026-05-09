import React from 'react';

export interface MinaSidebarAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSidebarAlt: React.FC<MinaSidebarAltProps>;
export default MinaSidebarAlt;
