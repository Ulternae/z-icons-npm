import React from 'react';

export interface CoreAngleUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreAngleUpSolid(props: CoreAngleUpSolidProps): React.ReactElement;
export default CoreAngleUpSolid;
