import React from 'react';

export interface MinaTypeTextSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTypeTextSolid: React.FC<MinaTypeTextSolidProps>;
export default MinaTypeTextSolid;
