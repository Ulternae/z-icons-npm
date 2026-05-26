import React from 'react';

export interface LanCloudHailProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudHail: React.FC<LanCloudHailProps>;
export default LanCloudHail;
