import React from 'react';

export interface LanFanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFanRegular(props: LanFanRegularProps): React.ReactElement;
export default LanFanRegular;
