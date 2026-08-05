import React from 'react';

export interface MinaDiceSixSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDiceSixSolid(props: MinaDiceSixSolidProps): React.ReactElement;
export default MinaDiceSixSolid;
