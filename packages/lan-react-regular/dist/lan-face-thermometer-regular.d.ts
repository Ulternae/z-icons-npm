import React from 'react';

export interface LanFaceThermometerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceThermometerRegular(props: LanFaceThermometerRegularProps): React.ReactElement;
export default LanFaceThermometerRegular;
