import React from 'react';

export interface BruUnisonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruUnison(props: BruUnisonProps): React.ReactElement;
export default BruUnison;
