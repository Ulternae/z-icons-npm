import React from 'react';

export interface LanSignatureProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignature(props: LanSignatureProps): React.ReactElement;
export default LanSignature;
