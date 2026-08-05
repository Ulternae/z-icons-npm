import React from 'react';

export interface NeoCityProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCity(props: NeoCityProps): React.ReactElement;
export default NeoCity;
