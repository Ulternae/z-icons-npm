import React from 'react';

export interface BruSourcetreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSourcetree: React.FC<BruSourcetreeProps>;
export default BruSourcetree;
