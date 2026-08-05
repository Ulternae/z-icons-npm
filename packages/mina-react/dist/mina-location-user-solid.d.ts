import React from 'react';

export interface MinaLocationUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLocationUserSolid(props: MinaLocationUserSolidProps): React.ReactElement;
export default MinaLocationUserSolid;
