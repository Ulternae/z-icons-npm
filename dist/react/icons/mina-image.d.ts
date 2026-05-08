import React from 'react';

export interface MinaImageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaImage: React.FC<MinaImageProps>;
export default MinaImage;
