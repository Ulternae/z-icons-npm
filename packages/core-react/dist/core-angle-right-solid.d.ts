import React from 'react';

export interface CoreAngleRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreAngleRightSolid(props: CoreAngleRightSolidProps): React.ReactElement;
export default CoreAngleRightSolid;
