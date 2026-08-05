import React from 'react';

export interface LanSignatureRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignatureRegular(props: LanSignatureRegularProps): React.ReactElement;
export default LanSignatureRegular;
