import React from 'react';

export interface MinaBookImageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookImage: React.FC<MinaBookImageProps>;
export default MinaBookImage;
