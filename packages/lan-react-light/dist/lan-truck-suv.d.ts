import React from 'react';

export interface LanTruckSuvProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckSuv(props: LanTruckSuvProps): React.ReactElement;
export default LanTruckSuv;
