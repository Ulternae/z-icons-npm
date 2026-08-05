import React from 'react';

export interface LanFenceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFenceRegular(props: LanFenceRegularProps): React.ReactElement;
export default LanFenceRegular;
