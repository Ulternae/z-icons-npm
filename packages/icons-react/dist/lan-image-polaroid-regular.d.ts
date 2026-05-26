import React from 'react';

export interface LanImagePolaroidRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImagePolaroidRegular: React.FC<LanImagePolaroidRegularProps>;
export default LanImagePolaroidRegular;
