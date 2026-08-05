import React from 'react';

export interface MinaFourSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFourSolid(props: MinaFourSolidProps): React.ReactElement;
export default MinaFourSolid;
