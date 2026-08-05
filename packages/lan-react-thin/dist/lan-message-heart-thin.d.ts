import React from 'react';

export interface LanMessageHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageHeartThin(props: LanMessageHeartThinProps): React.ReactElement;
export default LanMessageHeartThin;
