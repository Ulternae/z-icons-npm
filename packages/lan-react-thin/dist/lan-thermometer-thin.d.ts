import React from 'react';

export interface LanThermometerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThermometerThin(props: LanThermometerThinProps): React.ReactElement;
export default LanThermometerThin;
