import React from 'react';

export interface LanSailboatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSailboatThin: React.FC<LanSailboatThinProps>;
export default LanSailboatThin;
