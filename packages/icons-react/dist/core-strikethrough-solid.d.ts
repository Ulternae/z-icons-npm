import React from 'react';

export interface CoreStrikethroughSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreStrikethroughSolid: React.FC<CoreStrikethroughSolidProps>;
export default CoreStrikethroughSolid;
