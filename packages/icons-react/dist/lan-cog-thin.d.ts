import React from 'react';

export interface LanCogThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCogThin: React.FC<LanCogThinProps>;
export default LanCogThin;
