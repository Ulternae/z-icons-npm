import React from 'react';

export interface BruMagentoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruMagento: React.FC<BruMagentoProps>;
export default BruMagento;
