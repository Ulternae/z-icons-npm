import React from 'react';

export interface BruDiggProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruDigg: React.FC<BruDiggProps>;
export default BruDigg;
