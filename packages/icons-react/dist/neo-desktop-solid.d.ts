import React from 'react';

export interface NeoDesktopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoDesktopSolid: React.FC<NeoDesktopSolidProps>;
export default NeoDesktopSolid;
