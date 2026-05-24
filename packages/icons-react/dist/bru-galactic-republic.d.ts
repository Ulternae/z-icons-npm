import React from 'react';

export interface BruGalacticRepublicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGalacticRepublic: React.FC<BruGalacticRepublicProps>;
export default BruGalacticRepublic;
