import React from 'react';

export interface BruFediverseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruFediverse(props: BruFediverseProps): React.ReactElement;
export default BruFediverse;
