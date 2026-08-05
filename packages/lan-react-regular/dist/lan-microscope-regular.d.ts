import React from 'react';

export interface LanMicroscopeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMicroscopeRegular(props: LanMicroscopeRegularProps): React.ReactElement;
export default LanMicroscopeRegular;
