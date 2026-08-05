import React from 'react';

export interface LanPauseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPauseRegular(props: LanPauseRegularProps): React.ReactElement;
export default LanPauseRegular;
