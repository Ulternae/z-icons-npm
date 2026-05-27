import React from 'react';

export interface CoreFilterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFilterSolid: React.FC<CoreFilterSolidProps>;
export default CoreFilterSolid;
