import React from 'react';

export interface LanUserPenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserPen: React.FC<LanUserPenProps>;
export default LanUserPen;
