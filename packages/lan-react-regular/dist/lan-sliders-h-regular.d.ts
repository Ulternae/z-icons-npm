import React from 'react';

export interface LanSlidersHRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlidersHRegular(props: LanSlidersHRegularProps): React.ReactElement;
export default LanSlidersHRegular;
