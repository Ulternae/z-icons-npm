import React from 'react';

export interface BruSquareJsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareJs: React.FC<BruSquareJsProps>;
export default BruSquareJs;
