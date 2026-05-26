import React from 'react';

export interface LanChevronUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChevronUpThin: React.FC<LanChevronUpThinProps>;
export default LanChevronUpThin;
