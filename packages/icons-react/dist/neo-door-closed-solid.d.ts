import React from 'react';

export interface NeoDoorClosedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoDoorClosedSolid: React.FC<NeoDoorClosedSolidProps>;
export default NeoDoorClosedSolid;
