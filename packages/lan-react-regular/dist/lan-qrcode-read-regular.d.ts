import React from 'react';

export interface LanQrcodeReadRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanQrcodeReadRegular(props: LanQrcodeReadRegularProps): React.ReactElement;
export default LanQrcodeReadRegular;
