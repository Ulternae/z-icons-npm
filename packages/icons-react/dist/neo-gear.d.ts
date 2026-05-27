import React from 'react';

export interface NeoGearProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoGear: React.FC<NeoGearProps>;
export default NeoGear;
