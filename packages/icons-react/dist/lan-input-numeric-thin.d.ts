import React from 'react';

export interface LanInputNumericThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInputNumericThin: React.FC<LanInputNumericThinProps>;
export default LanInputNumericThin;
