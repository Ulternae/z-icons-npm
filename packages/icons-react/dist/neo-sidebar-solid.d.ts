import React from 'react';

export interface NeoSidebarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSidebarSolid: React.FC<NeoSidebarSolidProps>;
export default NeoSidebarSolid;
