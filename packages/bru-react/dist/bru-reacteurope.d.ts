import React from 'react';

export interface BruReacteuropeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruReacteurope(props: BruReacteuropeProps): React.ReactElement;
export default BruReacteurope;
