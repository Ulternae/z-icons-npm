import React from 'react';

export interface NeoCameraSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCameraSolid: React.FC<NeoCameraSolidProps>;
export default NeoCameraSolid;
