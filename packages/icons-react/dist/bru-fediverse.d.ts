import React from 'react';

export interface BruFediverseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruFediverse: React.FC<BruFediverseProps>;
export default BruFediverse;
