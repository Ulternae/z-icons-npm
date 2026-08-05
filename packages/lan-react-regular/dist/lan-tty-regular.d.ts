import React from 'react';

export interface LanTtyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTtyRegular(props: LanTtyRegularProps): React.ReactElement;
export default LanTtyRegular;
