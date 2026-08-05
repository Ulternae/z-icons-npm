import React from 'react';

export interface MinaWheelchairSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWheelchairSolid(props: MinaWheelchairSolidProps): React.ReactElement;
export default MinaWheelchairSolid;
