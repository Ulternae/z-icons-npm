import React from 'react';

export interface LanToothProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTooth: React.FC<LanToothProps>;
export default LanTooth;
