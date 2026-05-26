import React from 'react';

export interface LanLiraSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLiraSignThin: React.FC<LanLiraSignThinProps>;
export default LanLiraSignThin;
