import React from 'react';

export interface CoreAngleLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreAngleLeftSolid(props: CoreAngleLeftSolidProps): React.ReactElement;
export default CoreAngleLeftSolid;
