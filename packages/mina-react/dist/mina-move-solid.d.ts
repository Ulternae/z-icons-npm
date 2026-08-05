import React from 'react';

export interface MinaMoveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMoveSolid(props: MinaMoveSolidProps): React.ReactElement;
export default MinaMoveSolid;
