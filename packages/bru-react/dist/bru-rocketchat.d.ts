import React from 'react';

export interface BruRocketchatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruRocketchat(props: BruRocketchatProps): React.ReactElement;
export default BruRocketchat;
