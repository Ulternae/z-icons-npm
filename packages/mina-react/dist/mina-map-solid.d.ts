import React from 'react';

export interface MinaMapSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMapSolid(props: MinaMapSolidProps): React.ReactElement;
export default MinaMapSolid;
