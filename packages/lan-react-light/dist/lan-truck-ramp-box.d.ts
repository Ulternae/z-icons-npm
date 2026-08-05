import React from 'react';

export interface LanTruckRampBoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckRampBox(props: LanTruckRampBoxProps): React.ReactElement;
export default LanTruckRampBox;
