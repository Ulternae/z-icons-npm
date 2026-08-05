import React from 'react';

export interface MinaLocationSelectedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLocationSelectedSolid(props: MinaLocationSelectedSolidProps): React.ReactElement;
export default MinaLocationSelectedSolid;
