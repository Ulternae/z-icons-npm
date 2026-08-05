import React from 'react';

export interface LanSlidersVRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlidersVRegular(props: LanSlidersVRegularProps): React.ReactElement;
export default LanSlidersVRegular;
