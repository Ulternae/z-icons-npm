import React from 'react';

export interface MinaLocationXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLocationXSolid(props: MinaLocationXSolidProps): React.ReactElement;
export default MinaLocationXSolid;
