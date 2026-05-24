import React from 'react';

export interface BruFulcrumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruFulcrum: React.FC<BruFulcrumProps>;
export default BruFulcrum;
