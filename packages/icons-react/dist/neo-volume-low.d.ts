import React from 'react';

export interface NeoVolumeLowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoVolumeLow: React.FC<NeoVolumeLowProps>;
export default NeoVolumeLow;
