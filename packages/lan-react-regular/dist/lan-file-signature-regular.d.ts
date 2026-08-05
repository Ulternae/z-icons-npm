import React from 'react';

export interface LanFileSignatureRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileSignatureRegular(props: LanFileSignatureRegularProps): React.ReactElement;
export default LanFileSignatureRegular;
