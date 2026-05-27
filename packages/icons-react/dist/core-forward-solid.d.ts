import React from 'react';

export interface CoreForwardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreForwardSolid: React.FC<CoreForwardSolidProps>;
export default CoreForwardSolid;
