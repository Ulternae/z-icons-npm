import React from 'react';

export interface LanQrcodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanQrcodeSolid(props: LanQrcodeSolidProps): React.ReactElement;
export default LanQrcodeSolid;
