import React from 'react';

export interface MinaHomeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHomeSolid: React.FC<MinaHomeSolidProps>;
export default MinaHomeSolid;
