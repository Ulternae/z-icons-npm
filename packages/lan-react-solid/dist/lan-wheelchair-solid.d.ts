import React from 'react';

export interface LanWheelchairSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWheelchairSolid(props: LanWheelchairSolidProps): React.ReactElement;
export default LanWheelchairSolid;
