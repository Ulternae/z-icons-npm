import React from 'react';

export interface NeoSquareCodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSquareCodeSolid(props: NeoSquareCodeSolidProps): React.ReactElement;
export default NeoSquareCodeSolid;
