import React from 'react';

export interface LanFileMovThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMovThin: React.FC<LanFileMovThinProps>;
export default LanFileMovThin;
