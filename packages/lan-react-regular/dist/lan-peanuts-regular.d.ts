import React from 'react';

export interface LanPeanutsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeanutsRegular(props: LanPeanutsRegularProps): React.ReactElement;
export default LanPeanutsRegular;
