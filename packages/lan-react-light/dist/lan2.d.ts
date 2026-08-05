import React from 'react';

export interface Lan2Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function Lan2(props: Lan2Props): React.ReactElement;
export default Lan2;
