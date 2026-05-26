import React from 'react';

export interface LanCloudFogRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudFogRegular: React.FC<LanCloudFogRegularProps>;
export default LanCloudFogRegular;
