import React from 'react';

export interface MinaCogFourSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCogFourSolid(props: MinaCogFourSolidProps): React.ReactElement;
export default MinaCogFourSolid;
