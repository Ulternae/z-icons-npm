import React from 'react';

export interface BruOldRepublicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruOldRepublic: React.FC<BruOldRepublicProps>;
export default BruOldRepublic;
