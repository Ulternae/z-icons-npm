import React from 'react';

export interface MinaBrandAppleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandAppleSolid(props: MinaBrandAppleSolidProps): React.ReactElement;
export default MinaBrandAppleSolid;
