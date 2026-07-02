import React from 'react';

export interface CoreScissorsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreScissorsSolid(props: CoreScissorsSolidProps): React.ReactElement;
export default CoreScissorsSolid;
