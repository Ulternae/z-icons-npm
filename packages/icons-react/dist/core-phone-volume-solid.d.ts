import React from 'react';

export interface CorePhoneVolumeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePhoneVolumeSolid: React.FC<CorePhoneVolumeSolidProps>;
export default CorePhoneVolumeSolid;
