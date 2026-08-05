import React from 'react';

export interface LanBorderLeftRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderLeftRegular(props: LanBorderLeftRegularProps): React.ReactElement;
export default LanBorderLeftRegular;
