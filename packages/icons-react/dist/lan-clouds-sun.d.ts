import React from 'react';

export interface LanCloudsSunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudsSun: React.FC<LanCloudsSunProps>;
export default LanCloudsSun;
