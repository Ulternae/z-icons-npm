import React from 'react';

export interface LanCapricornThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCapricornThin: React.FC<LanCapricornThinProps>;
export default LanCapricornThin;
