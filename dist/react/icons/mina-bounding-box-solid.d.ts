import React from 'react';

export interface MinaBoundingBoxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBoundingBoxSolid: React.FC<MinaBoundingBoxSolidProps>;
export default MinaBoundingBoxSolid;
