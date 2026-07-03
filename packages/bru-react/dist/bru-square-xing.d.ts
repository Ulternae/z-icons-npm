import React from 'react';

export interface BruSquareXingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareXing(props: BruSquareXingProps): React.ReactElement;
export default BruSquareXing;
