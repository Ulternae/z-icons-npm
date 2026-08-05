import React from 'react';

export interface LanBarcodeScanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarcodeScanRegular(props: LanBarcodeScanRegularProps): React.ReactElement;
export default LanBarcodeScanRegular;
