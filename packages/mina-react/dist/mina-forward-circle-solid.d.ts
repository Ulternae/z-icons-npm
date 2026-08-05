import React from 'react';

export interface MinaForwardCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaForwardCircleSolid(props: MinaForwardCircleSolidProps): React.ReactElement;
export default MinaForwardCircleSolid;
