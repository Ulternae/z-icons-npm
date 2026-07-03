import React from 'react';

export interface BruBityProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruBity(props: BruBityProps): React.ReactElement;
export default BruBity;
