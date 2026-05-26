import React from 'react';

export interface LanUserHoodieThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserHoodieThin: React.FC<LanUserHoodieThinProps>;
export default LanUserHoodieThin;
