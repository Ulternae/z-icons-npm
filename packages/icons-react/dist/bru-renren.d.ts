import React from 'react';

export interface BruRenrenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruRenren: React.FC<BruRenrenProps>;
export default BruRenren;
