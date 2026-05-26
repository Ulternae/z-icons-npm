import React from 'react';

export interface LanSwordsLaserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwordsLaserThin: React.FC<LanSwordsLaserThinProps>;
export default LanSwordsLaserThin;
