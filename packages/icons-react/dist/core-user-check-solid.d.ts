import React from 'react';

export interface CoreUserCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreUserCheckSolid: React.FC<CoreUserCheckSolidProps>;
export default CoreUserCheckSolid;
