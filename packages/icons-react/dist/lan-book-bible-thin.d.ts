import React from 'react';

export interface LanBookBibleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookBibleThin: React.FC<LanBookBibleThinProps>;
export default LanBookBibleThin;
