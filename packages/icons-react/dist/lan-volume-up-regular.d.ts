import React from 'react';

export interface LanVolumeUpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeUpRegular: React.FC<LanVolumeUpRegularProps>;
export default LanVolumeUpRegular;
