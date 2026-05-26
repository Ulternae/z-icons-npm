import React from 'react';

export interface LanCloudBinarySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudBinarySolid: React.FC<LanCloudBinarySolidProps>;
export default LanCloudBinarySolid;
