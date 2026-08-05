import React from 'react';

export interface LanBinaryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBinaryRegular(props: LanBinaryRegularProps): React.ReactElement;
export default LanBinaryRegular;
