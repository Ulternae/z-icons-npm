import React from 'react';

export interface BruSquareJsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareJs(props: BruSquareJsProps): React.ReactElement;
export default BruSquareJs;
