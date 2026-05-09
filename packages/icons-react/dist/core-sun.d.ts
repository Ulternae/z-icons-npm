import React from 'react';

export interface CoreSunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSun: React.FC<CoreSunProps>;
export default CoreSun;
