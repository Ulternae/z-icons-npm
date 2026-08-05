import React from 'react';

export interface Lan3ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function Lan3Thin(props: Lan3ThinProps): React.ReactElement;
export default Lan3Thin;
