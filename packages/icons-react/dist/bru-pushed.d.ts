import React from 'react';

export interface BruPushedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruPushed: React.FC<BruPushedProps>;
export default BruPushed;
