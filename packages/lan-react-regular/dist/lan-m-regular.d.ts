import React from 'react';

export interface LanMRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMRegular(props: LanMRegularProps): React.ReactElement;
export default LanMRegular;
