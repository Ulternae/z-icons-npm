import React from 'react';

export interface Lan2ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function Lan2Thin(props: Lan2ThinProps): React.ReactElement;
export default Lan2Thin;
