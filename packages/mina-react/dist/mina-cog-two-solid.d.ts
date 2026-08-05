import React from 'react';

export interface MinaCogTwoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCogTwoSolid(props: MinaCogTwoSolidProps): React.ReactElement;
export default MinaCogTwoSolid;
