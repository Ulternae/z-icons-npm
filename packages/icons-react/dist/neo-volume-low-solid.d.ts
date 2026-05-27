import React from 'react';

export interface NeoVolumeLowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoVolumeLowSolid: React.FC<NeoVolumeLowSolidProps>;
export default NeoVolumeLowSolid;
