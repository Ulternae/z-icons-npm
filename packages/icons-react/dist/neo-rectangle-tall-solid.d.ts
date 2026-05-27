import React from 'react';

export interface NeoRectangleTallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoRectangleTallSolid: React.FC<NeoRectangleTallSolidProps>;
export default NeoRectangleTallSolid;
