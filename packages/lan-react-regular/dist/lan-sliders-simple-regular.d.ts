import React from 'react';

export interface LanSlidersSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlidersSimpleRegular(props: LanSlidersSimpleRegularProps): React.ReactElement;
export default LanSlidersSimpleRegular;
