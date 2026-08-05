import React from 'react';

export interface LanThermometerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThermometerRegular(props: LanThermometerRegularProps): React.ReactElement;
export default LanThermometerRegular;
