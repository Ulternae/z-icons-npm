import React from 'react';

export interface LanUnicornRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUnicornRegular(props: LanUnicornRegularProps): React.ReactElement;
export default LanUnicornRegular;
