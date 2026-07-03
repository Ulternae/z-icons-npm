import React from 'react';

export interface BruEarlybirdsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruEarlybirds(props: BruEarlybirdsProps): React.ReactElement;
export default BruEarlybirds;
