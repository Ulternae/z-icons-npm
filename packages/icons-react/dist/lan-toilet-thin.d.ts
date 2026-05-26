import React from 'react';

export interface LanToiletThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToiletThin: React.FC<LanToiletThinProps>;
export default LanToiletThin;
