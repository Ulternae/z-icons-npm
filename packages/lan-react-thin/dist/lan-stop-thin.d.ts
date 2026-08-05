import React from 'react';

export interface LanStopThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStopThin(props: LanStopThinProps): React.ReactElement;
export default LanStopThin;
