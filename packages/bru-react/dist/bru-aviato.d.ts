import React from 'react';

export interface BruAviatoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruAviato(props: BruAviatoProps): React.ReactElement;
export default BruAviato;
