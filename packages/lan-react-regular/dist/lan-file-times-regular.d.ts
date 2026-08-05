import React from 'react';

export interface LanFileTimesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileTimesRegular(props: LanFileTimesRegularProps): React.ReactElement;
export default LanFileTimesRegular;
