import React from 'react';

export interface BruProductHuntProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruProductHunt(props: BruProductHuntProps): React.ReactElement;
export default BruProductHunt;
