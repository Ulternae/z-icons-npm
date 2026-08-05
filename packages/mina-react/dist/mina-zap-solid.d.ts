import React from 'react';

export interface MinaZapSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaZapSolid(props: MinaZapSolidProps): React.ReactElement;
export default MinaZapSolid;
