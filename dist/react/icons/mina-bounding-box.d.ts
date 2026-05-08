import React from 'react';

export interface MinaBoundingBoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBoundingBox: React.FC<MinaBoundingBoxProps>;
export default MinaBoundingBox;
