import React from 'react';

export interface MinaPinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPinSolid(props: MinaPinSolidProps): React.ReactElement;
export default MinaPinSolid;
