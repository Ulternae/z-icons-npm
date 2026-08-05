import React from 'react';

export interface LanHouseChimneyWindowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseChimneyWindowThin(props: LanHouseChimneyWindowThinProps): React.ReactElement;
export default LanHouseChimneyWindowThin;
