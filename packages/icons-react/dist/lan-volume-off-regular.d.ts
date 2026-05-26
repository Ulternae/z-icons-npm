import React from 'react';

export interface LanVolumeOffRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeOffRegular: React.FC<LanVolumeOffRegularProps>;
export default LanVolumeOffRegular;
