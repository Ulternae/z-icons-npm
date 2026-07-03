import React from 'react';

export interface BruCuttlefishProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCuttlefish(props: BruCuttlefishProps): React.ReactElement;
export default BruCuttlefish;
