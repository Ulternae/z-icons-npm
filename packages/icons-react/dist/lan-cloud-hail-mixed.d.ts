import React from 'react';

export interface LanCloudHailMixedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudHailMixed: React.FC<LanCloudHailMixedProps>;
export default LanCloudHailMixed;
