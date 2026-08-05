import React from 'react';

export interface LanQrcodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanQrcode(props: LanQrcodeProps): React.ReactElement;
export default LanQrcode;
