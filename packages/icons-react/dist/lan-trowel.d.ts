import React from 'react';

export interface LanTrowelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrowel: React.FC<LanTrowelProps>;
export default LanTrowel;
