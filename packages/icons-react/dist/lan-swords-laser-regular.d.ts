import React from 'react';

export interface LanSwordsLaserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwordsLaserRegular: React.FC<LanSwordsLaserRegularProps>;
export default LanSwordsLaserRegular;
