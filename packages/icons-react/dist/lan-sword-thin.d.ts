import React from 'react';

export interface LanSwordThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwordThin: React.FC<LanSwordThinProps>;
export default LanSwordThin;
