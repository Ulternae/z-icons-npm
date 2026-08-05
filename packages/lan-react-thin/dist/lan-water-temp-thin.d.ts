import React from 'react';

export interface LanWaterTempThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaterTempThin(props: LanWaterTempThinProps): React.ReactElement;
export default LanWaterTempThin;
