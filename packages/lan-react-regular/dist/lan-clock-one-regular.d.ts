import React from 'react';

export interface LanClockOneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockOneRegular(props: LanClockOneRegularProps): React.ReactElement;
export default LanClockOneRegular;
