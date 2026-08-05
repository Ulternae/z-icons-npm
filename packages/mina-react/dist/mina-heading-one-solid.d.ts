import React from 'react';

export interface MinaHeadingOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeadingOneSolid(props: MinaHeadingOneSolidProps): React.ReactElement;
export default MinaHeadingOneSolid;
