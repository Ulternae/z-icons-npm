import React from 'react';

export interface MinaRocketSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRocketSolid(props: MinaRocketSolidProps): React.ReactElement;
export default MinaRocketSolid;
