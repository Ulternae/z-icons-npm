import React from 'react';

export interface LanKerningRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKerningRegular(props: LanKerningRegularProps): React.ReactElement;
export default LanKerningRegular;
