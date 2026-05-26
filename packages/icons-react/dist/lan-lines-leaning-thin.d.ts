import React from 'react';

export interface LanLinesLeaningThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLinesLeaningThin: React.FC<LanLinesLeaningThinProps>;
export default LanLinesLeaningThin;
