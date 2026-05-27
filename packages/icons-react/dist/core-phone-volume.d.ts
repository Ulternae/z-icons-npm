import React from 'react';

export interface CorePhoneVolumeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePhoneVolume: React.FC<CorePhoneVolumeProps>;
export default CorePhoneVolume;
