import React from 'react';

export interface LanColonSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanColonSignThin: React.FC<LanColonSignThinProps>;
export default LanColonSignThin;
