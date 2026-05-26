import React from 'react';

export interface LanRampLoadingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRampLoading: React.FC<LanRampLoadingProps>;
export default LanRampLoading;
