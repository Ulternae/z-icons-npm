import React from 'react';

export interface MinaBrandFramerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandFramerSolid(props: MinaBrandFramerSolidProps): React.ReactElement;
export default MinaBrandFramerSolid;
