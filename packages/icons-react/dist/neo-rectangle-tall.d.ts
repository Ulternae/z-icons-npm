import React from 'react';

export interface NeoRectangleTallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoRectangleTall: React.FC<NeoRectangleTallProps>;
export default NeoRectangleTall;
