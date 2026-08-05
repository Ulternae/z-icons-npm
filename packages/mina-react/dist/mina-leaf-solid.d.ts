import React from 'react';

export interface MinaLeafSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLeafSolid(props: MinaLeafSolidProps): React.ReactElement;
export default MinaLeafSolid;
