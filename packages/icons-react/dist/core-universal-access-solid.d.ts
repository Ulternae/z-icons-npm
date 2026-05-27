import React from 'react';

export interface CoreUniversalAccessSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreUniversalAccessSolid: React.FC<CoreUniversalAccessSolidProps>;
export default CoreUniversalAccessSolid;
