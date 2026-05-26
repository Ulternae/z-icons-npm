import React from 'react';

export interface LanVolumeControlPhoneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeControlPhoneRegular: React.FC<LanVolumeControlPhoneRegularProps>;
export default LanVolumeControlPhoneRegular;
