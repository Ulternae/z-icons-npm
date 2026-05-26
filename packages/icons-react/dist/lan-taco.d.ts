import React from 'react';

export interface LanTacoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTaco: React.FC<LanTacoProps>;
export default LanTaco;
