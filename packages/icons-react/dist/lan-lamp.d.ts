import React from 'react';

export interface LanLampProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLamp: React.FC<LanLampProps>;
export default LanLamp;
