import React from 'react';

export interface LanWaterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaterThin(props: LanWaterThinProps): React.ReactElement;
export default LanWaterThin;
