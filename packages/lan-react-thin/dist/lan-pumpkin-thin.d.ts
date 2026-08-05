import React from 'react';

export interface LanPumpkinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPumpkinThin(props: LanPumpkinThinProps): React.ReactElement;
export default LanPumpkinThin;
