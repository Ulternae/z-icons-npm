import React from 'react';

export interface BruGalacticRepublicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGalacticRepublic(props: BruGalacticRepublicProps): React.ReactElement;
export default BruGalacticRepublic;
