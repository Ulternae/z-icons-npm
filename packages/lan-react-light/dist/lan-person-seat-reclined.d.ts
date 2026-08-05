import React from 'react';

export interface LanPersonSeatReclinedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSeatReclined(props: LanPersonSeatReclinedProps): React.ReactElement;
export default LanPersonSeatReclined;
