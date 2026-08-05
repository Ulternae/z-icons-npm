import React from 'react';

export interface LanWheelchairProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWheelchair(props: LanWheelchairProps): React.ReactElement;
export default LanWheelchair;
