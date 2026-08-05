import React from 'react';

export interface LanPantsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPantsRegular(props: LanPantsRegularProps): React.ReactElement;
export default LanPantsRegular;
