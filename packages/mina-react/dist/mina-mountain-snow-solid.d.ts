import React from 'react';

export interface MinaMountainSnowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMountainSnowSolid(props: MinaMountainSnowSolidProps): React.ReactElement;
export default MinaMountainSnowSolid;
