import React from 'react';

export interface CoreHourglassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreHourglass(props: CoreHourglassProps): React.ReactElement;
export default CoreHourglass;
