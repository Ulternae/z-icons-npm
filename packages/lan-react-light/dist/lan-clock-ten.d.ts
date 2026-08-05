import React from 'react';

export interface LanClockTenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockTen(props: LanClockTenProps): React.ReactElement;
export default LanClockTen;
