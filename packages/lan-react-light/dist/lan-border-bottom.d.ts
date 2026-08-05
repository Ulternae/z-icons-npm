import React from 'react';

export interface LanBorderBottomProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderBottom(props: LanBorderBottomProps): React.ReactElement;
export default LanBorderBottom;
