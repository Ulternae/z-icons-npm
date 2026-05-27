import React from 'react';

export interface CoreSignalGoodSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSignalGoodSolid: React.FC<CoreSignalGoodSolidProps>;
export default CoreSignalGoodSolid;
