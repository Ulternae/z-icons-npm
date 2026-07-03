import React from 'react';

export interface BruVnvProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruVnv(props: BruVnvProps): React.ReactElement;
export default BruVnv;
