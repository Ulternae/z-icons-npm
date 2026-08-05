import React from 'react';

export interface LanClockDeskRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockDeskRegular(props: LanClockDeskRegularProps): React.ReactElement;
export default LanClockDeskRegular;
