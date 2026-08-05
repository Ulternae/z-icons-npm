import React from 'react';

export interface LanTacoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTacoRegular(props: LanTacoRegularProps): React.ReactElement;
export default LanTacoRegular;
