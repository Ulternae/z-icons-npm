import React from 'react';

export interface NeoSquareCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSquareCode(props: NeoSquareCodeProps): React.ReactElement;
export default NeoSquareCode;
