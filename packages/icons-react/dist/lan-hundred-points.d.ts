import React from 'react';

export interface LanHundredPointsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHundredPoints: React.FC<LanHundredPointsProps>;
export default LanHundredPoints;
