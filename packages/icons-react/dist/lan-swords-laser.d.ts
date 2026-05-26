import React from 'react';

export interface LanSwordsLaserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwordsLaser: React.FC<LanSwordsLaserProps>;
export default LanSwordsLaser;
