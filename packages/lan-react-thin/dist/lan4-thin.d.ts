import React from 'react';

export interface Lan4ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function Lan4Thin(props: Lan4ThinProps): React.ReactElement;
export default Lan4Thin;
