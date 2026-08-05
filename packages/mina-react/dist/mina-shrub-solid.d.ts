import React from 'react';

export interface MinaShrubSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShrubSolid(props: MinaShrubSolidProps): React.ReactElement;
export default MinaShrubSolid;
