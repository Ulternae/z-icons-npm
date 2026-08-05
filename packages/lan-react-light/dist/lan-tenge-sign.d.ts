import React from 'react';

export interface LanTengeSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTengeSign(props: LanTengeSignProps): React.ReactElement;
export default LanTengeSign;
