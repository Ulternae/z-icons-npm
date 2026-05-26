import React from 'react';

export interface LanCloudSnowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudSnow: React.FC<LanCloudSnowProps>;
export default LanCloudSnow;
