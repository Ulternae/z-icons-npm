import React from 'react';

export interface CoreBackwardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBackwardSolid: React.FC<CoreBackwardSolidProps>;
export default CoreBackwardSolid;
