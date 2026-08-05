import React from 'react';

export interface LanHouseWindowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseWindow(props: LanHouseWindowProps): React.ReactElement;
export default LanHouseWindow;
