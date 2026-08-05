import React from 'react';

export interface LanFileSignatureProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileSignature(props: LanFileSignatureProps): React.ReactElement;
export default LanFileSignature;
