import React from 'react';

export interface MinaBookHomeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookHomeSolid: React.FC<MinaBookHomeSolidProps>;
export default MinaBookHomeSolid;
