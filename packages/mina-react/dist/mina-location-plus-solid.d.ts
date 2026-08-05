import React from 'react';

export interface MinaLocationPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLocationPlusSolid(props: MinaLocationPlusSolidProps): React.ReactElement;
export default MinaLocationPlusSolid;
