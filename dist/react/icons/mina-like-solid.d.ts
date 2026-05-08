import React from 'react';

export interface MinaLikeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLikeSolid: React.FC<MinaLikeSolidProps>;
export default MinaLikeSolid;
