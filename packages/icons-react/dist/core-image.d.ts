import React from 'react';

export interface CoreImageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreImage: React.FC<CoreImageProps>;
export default CoreImage;
