import React from 'react';

export interface CorePlaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePlane: React.FC<CorePlaneProps>;
export default CorePlane;
