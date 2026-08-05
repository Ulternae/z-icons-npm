import React from 'react';

export interface LanCalendarImageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarImage(props: LanCalendarImageProps): React.ReactElement;
export default LanCalendarImage;
