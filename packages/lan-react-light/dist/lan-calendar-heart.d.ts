import React from 'react';

export interface LanCalendarHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarHeart(props: LanCalendarHeartProps): React.ReactElement;
export default LanCalendarHeart;
