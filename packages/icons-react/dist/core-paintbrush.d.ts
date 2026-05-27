import React from 'react';

export interface CorePaintbrushProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePaintbrush: React.FC<CorePaintbrushProps>;
export default CorePaintbrush;
