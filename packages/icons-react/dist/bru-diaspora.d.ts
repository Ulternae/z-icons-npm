import React from 'react';

export interface BruDiasporaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruDiaspora: React.FC<BruDiasporaProps>;
export default BruDiaspora;
