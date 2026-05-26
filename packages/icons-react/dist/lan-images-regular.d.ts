import React from 'react';

export interface LanImagesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImagesRegular: React.FC<LanImagesRegularProps>;
export default LanImagesRegular;
