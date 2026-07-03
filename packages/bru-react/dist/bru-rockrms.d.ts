import React from 'react';

export interface BruRockrmsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruRockrms(props: BruRockrmsProps): React.ReactElement;
export default BruRockrms;
