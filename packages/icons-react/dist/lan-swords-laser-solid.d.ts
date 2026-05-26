import React from 'react';

export interface LanSwordsLaserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwordsLaserSolid: React.FC<LanSwordsLaserSolidProps>;
export default LanSwordsLaserSolid;
