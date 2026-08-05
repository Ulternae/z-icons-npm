import React from 'react';

export interface LanPeachRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeachRegular(props: LanPeachRegularProps): React.ReactElement;
export default LanPeachRegular;
