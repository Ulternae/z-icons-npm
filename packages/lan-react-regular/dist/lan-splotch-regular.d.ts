import React from 'react';

export interface LanSplotchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSplotchRegular(props: LanSplotchRegularProps): React.ReactElement;
export default LanSplotchRegular;
