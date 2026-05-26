import React from 'react';

export interface LanMillSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMillSignThin: React.FC<LanMillSignThinProps>;
export default LanMillSignThin;
