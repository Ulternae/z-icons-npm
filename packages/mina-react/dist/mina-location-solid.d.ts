import React from 'react';

export interface MinaLocationSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLocationSolid(props: MinaLocationSolidProps): React.ReactElement;
export default MinaLocationSolid;
