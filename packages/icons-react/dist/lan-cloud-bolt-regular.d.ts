import React from 'react';

export interface LanCloudBoltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudBoltRegular: React.FC<LanCloudBoltRegularProps>;
export default LanCloudBoltRegular;
