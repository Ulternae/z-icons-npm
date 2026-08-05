import React from 'react';

export interface MinaCogSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCogSolid(props: MinaCogSolidProps): React.ReactElement;
export default MinaCogSolid;
