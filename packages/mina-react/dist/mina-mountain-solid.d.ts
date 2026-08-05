import React from 'react';

export interface MinaMountainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMountainSolid(props: MinaMountainSolidProps): React.ReactElement;
export default MinaMountainSolid;
