import React from 'react';

export interface LanOilTempProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOilTemp(props: LanOilTempProps): React.ReactElement;
export default LanOilTemp;
