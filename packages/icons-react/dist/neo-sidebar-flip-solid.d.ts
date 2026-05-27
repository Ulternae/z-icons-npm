import React from 'react';

export interface NeoSidebarFlipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSidebarFlipSolid: React.FC<NeoSidebarFlipSolidProps>;
export default NeoSidebarFlipSolid;
