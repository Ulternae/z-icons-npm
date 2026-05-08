import React from 'react';

export interface MinaSidebarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSidebarSolid: React.FC<MinaSidebarSolidProps>;
export default MinaSidebarSolid;
