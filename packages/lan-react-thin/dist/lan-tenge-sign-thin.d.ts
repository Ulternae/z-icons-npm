import React from 'react';

export interface LanTengeSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTengeSignThin(props: LanTengeSignThinProps): React.ReactElement;
export default LanTengeSignThin;
