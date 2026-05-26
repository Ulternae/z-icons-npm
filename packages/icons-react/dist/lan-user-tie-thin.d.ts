import React from 'react';

export interface LanUserTieThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserTieThin: React.FC<LanUserTieThinProps>;
export default LanUserTieThin;
