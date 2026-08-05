import React from 'react';

export interface LanPercentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPercent(props: LanPercentProps): React.ReactElement;
export default LanPercent;
