import React from 'react';

export interface MinaFileTextSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFileTextSolid: React.FC<MinaFileTextSolidProps>;
export default MinaFileTextSolid;
