import React from 'react';

export interface CorePaintbrushSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePaintbrushSolid: React.FC<CorePaintbrushSolidProps>;
export default CorePaintbrushSolid;
