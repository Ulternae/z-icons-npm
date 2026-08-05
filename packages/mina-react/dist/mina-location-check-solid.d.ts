import React from 'react';

export interface MinaLocationCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLocationCheckSolid(props: MinaLocationCheckSolidProps): React.ReactElement;
export default MinaLocationCheckSolid;
