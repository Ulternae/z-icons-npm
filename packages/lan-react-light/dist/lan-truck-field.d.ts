import React from 'react';

export interface LanTruckFieldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckField(props: LanTruckFieldProps): React.ReactElement;
export default LanTruckField;
