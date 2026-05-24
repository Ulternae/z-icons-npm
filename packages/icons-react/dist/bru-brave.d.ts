import React from 'react';

export interface BruBraveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruBrave: React.FC<BruBraveProps>;
export default BruBrave;
