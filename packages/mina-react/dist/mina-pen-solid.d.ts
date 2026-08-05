import React from 'react';

export interface MinaPenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPenSolid(props: MinaPenSolidProps): React.ReactElement;
export default MinaPenSolid;
