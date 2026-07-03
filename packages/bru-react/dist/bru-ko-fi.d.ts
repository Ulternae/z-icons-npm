import React from 'react';

export interface BruKoFiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruKoFi(props: BruKoFiProps): React.ReactElement;
export default BruKoFi;
