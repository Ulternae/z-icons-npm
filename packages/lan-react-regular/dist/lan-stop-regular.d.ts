import React from 'react';

export interface LanStopRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStopRegular(props: LanStopRegularProps): React.ReactElement;
export default LanStopRegular;
