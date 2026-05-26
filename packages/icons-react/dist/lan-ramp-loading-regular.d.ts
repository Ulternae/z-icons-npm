import React from 'react';

export interface LanRampLoadingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRampLoadingRegular: React.FC<LanRampLoadingRegularProps>;
export default LanRampLoadingRegular;
