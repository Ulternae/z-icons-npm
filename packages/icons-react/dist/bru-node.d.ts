import React from 'react';

export interface BruNodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruNode: React.FC<BruNodeProps>;
export default BruNode;
