import React from 'react';

export interface MinaBowlSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBowlSolid(props: MinaBowlSolidProps): React.ReactElement;
export default MinaBowlSolid;
