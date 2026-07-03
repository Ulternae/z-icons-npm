import React from 'react';

export interface BruHotjarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruHotjar(props: BruHotjarProps): React.ReactElement;
export default BruHotjar;
