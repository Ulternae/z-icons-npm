import React from 'react';

export interface LanCloudBinaryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudBinaryRegular: React.FC<LanCloudBinaryRegularProps>;
export default LanCloudBinaryRegular;
