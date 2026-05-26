import React from 'react';

export interface LanDrawCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrawCircle: React.FC<LanDrawCircleProps>;
export default LanDrawCircle;
