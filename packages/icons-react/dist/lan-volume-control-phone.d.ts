import React from 'react';

export interface LanVolumeControlPhoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeControlPhone: React.FC<LanVolumeControlPhoneProps>;
export default LanVolumeControlPhone;
