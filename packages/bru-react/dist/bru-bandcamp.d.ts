import React from 'react';

export interface BruBandcampProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruBandcamp(props: BruBandcampProps): React.ReactElement;
export default BruBandcamp;
