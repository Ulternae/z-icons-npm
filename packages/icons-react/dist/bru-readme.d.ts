import React from 'react';

export interface BruReadmeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruReadme: React.FC<BruReadmeProps>;
export default BruReadme;
