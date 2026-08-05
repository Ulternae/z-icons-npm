import React from 'react';

export interface LanPipeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPipeRegular(props: LanPipeRegularProps): React.ReactElement;
export default LanPipeRegular;
