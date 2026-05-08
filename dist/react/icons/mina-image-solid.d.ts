import React from 'react';

export interface MinaImageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaImageSolid: React.FC<MinaImageSolidProps>;
export default MinaImageSolid;
