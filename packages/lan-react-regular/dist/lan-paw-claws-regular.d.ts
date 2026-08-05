import React from 'react';

export interface LanPawClawsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPawClawsRegular(props: LanPawClawsRegularProps): React.ReactElement;
export default LanPawClawsRegular;
