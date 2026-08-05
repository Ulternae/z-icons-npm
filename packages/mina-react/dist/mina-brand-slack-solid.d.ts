import React from 'react';

export interface MinaBrandSlackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandSlackSolid(props: MinaBrandSlackSolidProps): React.ReactElement;
export default MinaBrandSlackSolid;
