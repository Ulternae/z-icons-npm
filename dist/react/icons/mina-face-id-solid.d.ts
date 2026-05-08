import React from 'react';

export interface MinaFaceIdSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFaceIdSolid: React.FC<MinaFaceIdSolidProps>;
export default MinaFaceIdSolid;
