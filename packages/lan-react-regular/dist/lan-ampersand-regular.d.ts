import React from 'react';

export interface LanAmpersandRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAmpersandRegular(props: LanAmpersandRegularProps): React.ReactElement;
export default LanAmpersandRegular;
