import React from 'react';

export interface MinaLocationHomeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLocationHomeSolid(props: MinaLocationHomeSolidProps): React.ReactElement;
export default MinaLocationHomeSolid;
