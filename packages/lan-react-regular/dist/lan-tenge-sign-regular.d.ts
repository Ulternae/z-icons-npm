import React from 'react';

export interface LanTengeSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTengeSignRegular(props: LanTengeSignRegularProps): React.ReactElement;
export default LanTengeSignRegular;
