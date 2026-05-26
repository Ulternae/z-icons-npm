import React from 'react';

export interface LanAlienThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlienThin: React.FC<LanAlienThinProps>;
export default LanAlienThin;
