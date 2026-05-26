import React from 'react';

export interface LanImagePolaroidUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImagePolaroidUserRegular: React.FC<LanImagePolaroidUserRegularProps>;
export default LanImagePolaroidUserRegular;
