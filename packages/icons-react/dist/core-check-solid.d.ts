import React from 'react';

export interface CoreCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCheckSolid: React.FC<CoreCheckSolidProps>;
export default CoreCheckSolid;
