import React from 'react';

export interface MinaAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAltSolid(props: MinaAltSolidProps): React.ReactElement;
export default MinaAltSolid;
