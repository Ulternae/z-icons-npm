import React from 'react';

export interface MinaFemaleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFemaleSolid(props: MinaFemaleSolidProps): React.ReactElement;
export default MinaFemaleSolid;
