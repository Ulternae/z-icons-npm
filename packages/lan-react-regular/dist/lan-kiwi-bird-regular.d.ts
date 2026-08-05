import React from 'react';

export interface LanKiwiBirdRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKiwiBirdRegular(props: LanKiwiBirdRegularProps): React.ReactElement;
export default LanKiwiBirdRegular;
