import React from 'react';

export interface BruOldRepublicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruOldRepublic(props: BruOldRepublicProps): React.ReactElement;
export default BruOldRepublic;
