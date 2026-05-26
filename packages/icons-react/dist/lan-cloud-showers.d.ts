import React from 'react';

export interface LanCloudShowersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudShowers: React.FC<LanCloudShowersProps>;
export default LanCloudShowers;
