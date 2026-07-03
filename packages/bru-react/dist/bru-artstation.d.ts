import React from 'react';

export interface BruArtstationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruArtstation(props: BruArtstationProps): React.ReactElement;
export default BruArtstation;
