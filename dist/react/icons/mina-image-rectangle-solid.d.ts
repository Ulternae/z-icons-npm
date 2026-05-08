import React from 'react';

export interface MinaImageRectangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaImageRectangleSolid: React.FC<MinaImageRectangleSolidProps>;
export default MinaImageRectangleSolid;
