import React from 'react';

export interface MinaBrandPocketSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandPocketSolid(props: MinaBrandPocketSolidProps): React.ReactElement;
export default MinaBrandPocketSolid;
