import React from 'react';

export interface BruJuliaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruJulia(props: BruJuliaProps): React.ReactElement;
export default BruJulia;
