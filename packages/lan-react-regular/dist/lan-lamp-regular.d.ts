import React from 'react';

export interface LanLampRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLampRegular(props: LanLampRegularProps): React.ReactElement;
export default LanLampRegular;
