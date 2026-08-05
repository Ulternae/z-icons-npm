import React from 'react';

export interface MinaBinocularsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBinocularsSolid(props: MinaBinocularsSolidProps): React.ReactElement;
export default MinaBinocularsSolid;
