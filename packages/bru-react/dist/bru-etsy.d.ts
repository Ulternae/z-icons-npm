import React from 'react';

export interface BruEtsyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruEtsy(props: BruEtsyProps): React.ReactElement;
export default BruEtsy;
