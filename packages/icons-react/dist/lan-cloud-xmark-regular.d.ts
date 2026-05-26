import React from 'react';

export interface LanCloudXmarkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudXmarkRegular: React.FC<LanCloudXmarkRegularProps>;
export default LanCloudXmarkRegular;
