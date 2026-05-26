import React from 'react';

export interface LanFileImageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileImage: React.FC<LanFileImageProps>;
export default LanFileImage;
