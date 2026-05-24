import React from 'react';

export interface BruAlgoliaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruAlgolia: React.FC<BruAlgoliaProps>;
export default BruAlgolia;
