import React from 'react';

export interface LanBorderBottomThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderBottomThin(props: LanBorderBottomThinProps): React.ReactElement;
export default LanBorderBottomThin;
