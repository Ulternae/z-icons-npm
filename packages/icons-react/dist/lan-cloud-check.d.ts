import React from 'react';

export interface LanCloudCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudCheck: React.FC<LanCloudCheckProps>;
export default LanCloudCheck;
