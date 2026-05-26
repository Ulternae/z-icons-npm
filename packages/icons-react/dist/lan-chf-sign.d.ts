import React from 'react';

export interface LanChfSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChfSign: React.FC<LanChfSignProps>;
export default LanChfSign;
