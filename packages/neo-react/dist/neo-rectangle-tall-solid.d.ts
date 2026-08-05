import React from 'react';

export interface NeoRectangleTallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoRectangleTallSolid(props: NeoRectangleTallSolidProps): React.ReactElement;
export default NeoRectangleTallSolid;
