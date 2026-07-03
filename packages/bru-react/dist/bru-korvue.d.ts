import React from 'react';

export interface BruKorvueProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruKorvue(props: BruKorvueProps): React.ReactElement;
export default BruKorvue;
