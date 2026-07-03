import React from 'react';

export interface BruVscoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruVsco(props: BruVscoProps): React.ReactElement;
export default BruVsco;
