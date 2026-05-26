import React from 'react';

export interface LanWrenchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWrenchThin: React.FC<LanWrenchThinProps>;
export default LanWrenchThin;
