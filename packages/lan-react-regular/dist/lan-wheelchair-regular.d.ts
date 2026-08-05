import React from 'react';

export interface LanWheelchairRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWheelchairRegular(props: LanWheelchairRegularProps): React.ReactElement;
export default LanWheelchairRegular;
