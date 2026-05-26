import React from 'react';

export interface LanLeafMapleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeafMaple: React.FC<LanLeafMapleProps>;
export default LanLeafMaple;
