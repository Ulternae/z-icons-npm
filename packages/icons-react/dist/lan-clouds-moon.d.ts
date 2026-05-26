import React from 'react';

export interface LanCloudsMoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudsMoon: React.FC<LanCloudsMoonProps>;
export default LanCloudsMoon;
