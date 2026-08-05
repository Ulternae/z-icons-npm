import React from 'react';

export interface LanKRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKRegular(props: LanKRegularProps): React.ReactElement;
export default LanKRegular;
