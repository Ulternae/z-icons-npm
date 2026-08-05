import React from 'react';

export interface LanBorderOuterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderOuterThin(props: LanBorderOuterThinProps): React.ReactElement;
export default LanBorderOuterThin;
