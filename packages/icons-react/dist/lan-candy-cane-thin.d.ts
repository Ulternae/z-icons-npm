import React from 'react';

export interface LanCandyCaneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCandyCaneThin: React.FC<LanCandyCaneThinProps>;
export default LanCandyCaneThin;
