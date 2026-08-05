import React from 'react';

export interface LanSensorOnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSensorOnThin(props: LanSensorOnThinProps): React.ReactElement;
export default LanSensorOnThin;
