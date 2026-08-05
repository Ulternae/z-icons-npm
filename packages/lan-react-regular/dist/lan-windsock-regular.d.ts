import React from 'react';

export interface LanWindsockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindsockRegular(props: LanWindsockRegularProps): React.ReactElement;
export default LanWindsockRegular;
