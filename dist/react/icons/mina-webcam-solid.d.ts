import React from 'react';

export interface MinaWebcamSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWebcamSolid: React.FC<MinaWebcamSolidProps>;
export default MinaWebcamSolid;
