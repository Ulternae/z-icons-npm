import React from 'react';

export interface LanCloudPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudPlusRegular: React.FC<LanCloudPlusRegularProps>;
export default LanCloudPlusRegular;
