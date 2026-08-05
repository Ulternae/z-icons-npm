import React from 'react';

export interface LanWheelchairThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWheelchairThin(props: LanWheelchairThinProps): React.ReactElement;
export default LanWheelchairThin;
