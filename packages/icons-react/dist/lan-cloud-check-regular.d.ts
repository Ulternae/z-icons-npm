import React from 'react';

export interface LanCloudCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudCheckRegular: React.FC<LanCloudCheckRegularProps>;
export default LanCloudCheckRegular;
