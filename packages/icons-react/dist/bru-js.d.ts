import React from 'react';

export interface BruJsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruJs: React.FC<BruJsProps>;
export default BruJs;
