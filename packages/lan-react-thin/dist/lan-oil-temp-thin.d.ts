import React from 'react';

export interface LanOilTempThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOilTempThin(props: LanOilTempThinProps): React.ReactElement;
export default LanOilTempThin;
