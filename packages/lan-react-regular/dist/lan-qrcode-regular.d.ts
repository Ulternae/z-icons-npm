import React from 'react';

export interface LanQrcodeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanQrcodeRegular(props: LanQrcodeRegularProps): React.ReactElement;
export default LanQrcodeRegular;
