import React from 'react';

export interface LanCassetteBetamaxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCassetteBetamaxThin: React.FC<LanCassetteBetamaxThinProps>;
export default LanCassetteBetamaxThin;
