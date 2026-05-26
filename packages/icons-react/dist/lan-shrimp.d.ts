import React from 'react';

export interface LanShrimpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShrimp: React.FC<LanShrimpProps>;
export default LanShrimp;
