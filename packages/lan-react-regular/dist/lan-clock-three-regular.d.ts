import React from 'react';

export interface LanClockThreeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockThreeRegular(props: LanClockThreeRegularProps): React.ReactElement;
export default LanClockThreeRegular;
