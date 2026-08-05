import React from 'react';

export interface LanBorderOuterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderOuter(props: LanBorderOuterProps): React.ReactElement;
export default LanBorderOuter;
