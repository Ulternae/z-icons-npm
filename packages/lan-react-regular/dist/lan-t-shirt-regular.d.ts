import React from 'react';

export interface LanTShirtRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTShirtRegular(props: LanTShirtRegularProps): React.ReactElement;
export default LanTShirtRegular;
