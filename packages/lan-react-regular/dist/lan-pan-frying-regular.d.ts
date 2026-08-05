import React from 'react';

export interface LanPanFryingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPanFryingRegular(props: LanPanFryingRegularProps): React.ReactElement;
export default LanPanFryingRegular;
