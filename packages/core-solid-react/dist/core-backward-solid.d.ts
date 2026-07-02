import React from 'react';

export interface CoreBackwardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBackwardSolid(props: CoreBackwardSolidProps): React.ReactElement;
export default CoreBackwardSolid;
