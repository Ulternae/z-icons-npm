import React from 'react';

export interface LanFaceThermometerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceThermometerThin(props: LanFaceThermometerThinProps): React.ReactElement;
export default LanFaceThermometerThin;
