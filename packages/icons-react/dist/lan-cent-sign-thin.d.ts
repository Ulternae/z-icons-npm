import React from 'react';

export interface LanCentSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCentSignThin: React.FC<LanCentSignThinProps>;
export default LanCentSignThin;
