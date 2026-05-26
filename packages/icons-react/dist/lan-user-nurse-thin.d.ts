import React from 'react';

export interface LanUserNurseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserNurseThin: React.FC<LanUserNurseThinProps>;
export default LanUserNurseThin;
