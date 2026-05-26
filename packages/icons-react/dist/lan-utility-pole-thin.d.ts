import React from 'react';

export interface LanUtilityPoleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUtilityPoleThin: React.FC<LanUtilityPoleThinProps>;
export default LanUtilityPoleThin;
