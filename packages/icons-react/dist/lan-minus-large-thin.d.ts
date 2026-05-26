import React from 'react';

export interface LanMinusLargeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMinusLargeThin: React.FC<LanMinusLargeThinProps>;
export default LanMinusLargeThin;
