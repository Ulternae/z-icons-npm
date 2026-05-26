import React from 'react';

export interface LanCodeCompareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodeCompareThin: React.FC<LanCodeCompareThinProps>;
export default LanCodeCompareThin;
