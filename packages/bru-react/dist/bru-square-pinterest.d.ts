import React from 'react';

export interface BruSquarePinterestProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquarePinterest(props: BruSquarePinterestProps): React.ReactElement;
export default BruSquarePinterest;
