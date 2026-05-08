import React from 'react';

export interface NeoSunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSun: React.FC<NeoSunProps>;
export default NeoSun;
