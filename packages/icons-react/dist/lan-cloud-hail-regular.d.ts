import React from 'react';

export interface LanCloudHailRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudHailRegular: React.FC<LanCloudHailRegularProps>;
export default LanCloudHailRegular;
