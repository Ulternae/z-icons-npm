import React from 'react';

export interface BruVineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruVine(props: BruVineProps): React.ReactElement;
export default BruVine;
