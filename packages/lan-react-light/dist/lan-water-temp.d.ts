import React from 'react';

export interface LanWaterTempProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaterTemp(props: LanWaterTempProps): React.ReactElement;
export default LanWaterTemp;
