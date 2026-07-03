import React from 'react';

export interface BruFoursquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruFoursquare(props: BruFoursquareProps): React.ReactElement;
export default BruFoursquare;
