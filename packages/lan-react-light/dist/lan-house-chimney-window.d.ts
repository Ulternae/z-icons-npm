import React from 'react';

export interface LanHouseChimneyWindowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseChimneyWindow(props: LanHouseChimneyWindowProps): React.ReactElement;
export default LanHouseChimneyWindow;
