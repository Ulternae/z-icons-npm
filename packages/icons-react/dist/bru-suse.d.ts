import React from 'react';

export interface BruSuseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSuse: React.FC<BruSuseProps>;
export default BruSuse;
