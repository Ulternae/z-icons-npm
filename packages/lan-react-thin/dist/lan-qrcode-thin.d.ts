import React from 'react';

export interface LanQrcodeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanQrcodeThin(props: LanQrcodeThinProps): React.ReactElement;
export default LanQrcodeThin;
