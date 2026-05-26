import React from 'react';

export interface LanHSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHSquareThin: React.FC<LanHSquareThinProps>;
export default LanHSquareThin;
