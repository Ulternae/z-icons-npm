import React from 'react';

export interface BruViacoinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruViacoin(props: BruViacoinProps): React.ReactElement;
export default BruViacoin;
