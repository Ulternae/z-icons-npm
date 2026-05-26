import React from 'react';

export interface LanCloudShowersRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudShowersRegular: React.FC<LanCloudShowersRegularProps>;
export default LanCloudShowersRegular;
