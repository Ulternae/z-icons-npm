import React from 'react';

export interface NeoScissorsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoScissorsSolid(props: NeoScissorsSolidProps): React.ReactElement;
export default NeoScissorsSolid;
