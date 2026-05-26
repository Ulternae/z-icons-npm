import React from 'react';

export interface LanChfSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChfSignThin: React.FC<LanChfSignThinProps>;
export default LanChfSignThin;
