import React from 'react';

export interface LanEclipseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEclipseThin: React.FC<LanEclipseThinProps>;
export default LanEclipseThin;
