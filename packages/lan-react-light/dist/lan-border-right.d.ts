import React from 'react';

export interface LanBorderRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderRight(props: LanBorderRightProps): React.ReactElement;
export default LanBorderRight;
