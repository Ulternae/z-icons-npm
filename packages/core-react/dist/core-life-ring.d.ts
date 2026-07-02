import React from 'react';

export interface CoreLifeRingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLifeRing(props: CoreLifeRingProps): React.ReactElement;
export default CoreLifeRing;
