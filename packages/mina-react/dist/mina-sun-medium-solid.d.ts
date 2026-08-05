import React from 'react';

export interface MinaSunMediumSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSunMediumSolid(props: MinaSunMediumSolidProps): React.ReactElement;
export default MinaSunMediumSolid;
