import React from 'react';

export interface CorePercentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePercentSolid(props: CorePercentSolidProps): React.ReactElement;
export default CorePercentSolid;
