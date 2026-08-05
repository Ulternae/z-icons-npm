import React from 'react';

export interface MinaBrandXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandXSolid(props: MinaBrandXSolidProps): React.ReactElement;
export default MinaBrandXSolid;
