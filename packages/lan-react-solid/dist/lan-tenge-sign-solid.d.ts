import React from 'react';

export interface LanTengeSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTengeSignSolid(props: LanTengeSignSolidProps): React.ReactElement;
export default LanTengeSignSolid;
