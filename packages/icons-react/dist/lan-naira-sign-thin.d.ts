import React from 'react';

export interface LanNairaSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNairaSignThin: React.FC<LanNairaSignThinProps>;
export default LanNairaSignThin;
