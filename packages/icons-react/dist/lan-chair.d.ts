import React from 'react';

export interface LanChairProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChair: React.FC<LanChairProps>;
export default LanChair;
