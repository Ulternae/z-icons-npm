import React from 'react';

export interface LanPipeValveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPipeValveRegular(props: LanPipeValveRegularProps): React.ReactElement;
export default LanPipeValveRegular;
