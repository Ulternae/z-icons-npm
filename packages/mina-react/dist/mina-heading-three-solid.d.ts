import React from 'react';

export interface MinaHeadingThreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeadingThreeSolid(props: MinaHeadingThreeSolidProps): React.ReactElement;
export default MinaHeadingThreeSolid;
