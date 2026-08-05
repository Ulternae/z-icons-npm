import React from 'react';

export interface MinaTvSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTvSolid(props: MinaTvSolidProps): React.ReactElement;
export default MinaTvSolid;
