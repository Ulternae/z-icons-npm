import React from 'react';

export interface BruWebflowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruWebflow: React.FC<BruWebflowProps>;
export default BruWebflow;
