import React from 'react';

export interface LanPumpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPumpThin(props: LanPumpThinProps): React.ReactElement;
export default LanPumpThin;
