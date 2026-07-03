import React from 'react';

export interface BruDeezerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruDeezer(props: BruDeezerProps): React.ReactElement;
export default BruDeezer;
