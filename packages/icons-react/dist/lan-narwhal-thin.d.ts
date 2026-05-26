import React from 'react';

export interface LanNarwhalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNarwhalThin: React.FC<LanNarwhalThinProps>;
export default LanNarwhalThin;
