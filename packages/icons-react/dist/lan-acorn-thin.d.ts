import React from 'react';

export interface LanAcornThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAcornThin: React.FC<LanAcornThinProps>;
export default LanAcornThin;
