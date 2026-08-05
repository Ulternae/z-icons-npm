import React from 'react';

export interface CoreWheelchairSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreWheelchairSolid(props: CoreWheelchairSolidProps): React.ReactElement;
export default CoreWheelchairSolid;
