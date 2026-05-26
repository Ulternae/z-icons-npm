import React from 'react';

export interface LanCloudWordRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudWordRegular: React.FC<LanCloudWordRegularProps>;
export default LanCloudWordRegular;
