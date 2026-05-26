import React from 'react';

export interface LanOctagonCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctagonCheck: React.FC<LanOctagonCheckProps>;
export default LanOctagonCheck;
