import React from 'react';

export interface CoreSignalFairSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSignalFairSolid: React.FC<CoreSignalFairSolidProps>;
export default CoreSignalFairSolid;
