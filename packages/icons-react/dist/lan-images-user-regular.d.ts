import React from 'react';

export interface LanImagesUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImagesUserRegular: React.FC<LanImagesUserRegularProps>;
export default LanImagesUserRegular;
