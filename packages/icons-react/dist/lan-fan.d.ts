import React from 'react';

export interface LanFanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFan: React.FC<LanFanProps>;
export default LanFan;
