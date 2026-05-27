import React from 'react';

export interface CoreFileCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFileCheckSolid: React.FC<CoreFileCheckSolidProps>;
export default CoreFileCheckSolid;
