import React from 'react';

export interface MinaHashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHashSolid(props: MinaHashSolidProps): React.ReactElement;
export default MinaHashSolid;
