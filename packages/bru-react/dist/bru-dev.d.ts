import React from 'react';

export interface BruDevProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruDev(props: BruDevProps): React.ReactElement;
export default BruDev;
