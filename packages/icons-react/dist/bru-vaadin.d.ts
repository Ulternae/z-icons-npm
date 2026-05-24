import React from 'react';

export interface BruVaadinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruVaadin: React.FC<BruVaadinProps>;
export default BruVaadin;
