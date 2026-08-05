import React from 'react';

export interface LanBackwardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBackwardRegular(props: LanBackwardRegularProps): React.ReactElement;
export default LanBackwardRegular;
