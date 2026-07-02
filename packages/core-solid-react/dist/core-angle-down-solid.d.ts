import React from 'react';

export interface CoreAngleDownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreAngleDownSolid(props: CoreAngleDownSolidProps): React.ReactElement;
export default CoreAngleDownSolid;
