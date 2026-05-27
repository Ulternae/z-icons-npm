import React from 'react';

export interface CoreScreencastSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreScreencastSolid: React.FC<CoreScreencastSolidProps>;
export default CoreScreencastSolid;
