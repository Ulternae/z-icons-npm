import React from 'react';

export interface LanWonSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWonSignThin: React.FC<LanWonSignThinProps>;
export default LanWonSignThin;
