import React from 'react';

export interface LanAlicornThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlicornThin: React.FC<LanAlicornThinProps>;
export default LanAlicornThin;
