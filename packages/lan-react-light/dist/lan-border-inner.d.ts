import React from 'react';

export interface LanBorderInnerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderInner(props: LanBorderInnerProps): React.ReactElement;
export default LanBorderInner;
