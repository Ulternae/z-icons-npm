import React from 'react';

export interface LanVProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanV: React.FC<LanVProps>;
export default LanV;
