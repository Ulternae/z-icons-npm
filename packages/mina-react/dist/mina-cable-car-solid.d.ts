import React from 'react';

export interface MinaCableCarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCableCarSolid(props: MinaCableCarSolidProps): React.ReactElement;
export default MinaCableCarSolid;
