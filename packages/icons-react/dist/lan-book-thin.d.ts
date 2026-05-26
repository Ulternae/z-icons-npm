import React from 'react';

export interface LanBookThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookThin: React.FC<LanBookThinProps>;
export default LanBookThin;
