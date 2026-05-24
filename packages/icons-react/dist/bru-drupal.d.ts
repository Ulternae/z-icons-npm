import React from 'react';

export interface BruDrupalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruDrupal: React.FC<BruDrupalProps>;
export default BruDrupal;
