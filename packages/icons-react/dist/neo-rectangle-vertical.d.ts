import React from 'react';

export interface NeoRectangleVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoRectangleVertical: React.FC<NeoRectangleVerticalProps>;
export default NeoRectangleVertical;
