import React from 'react';

export interface LanBoldThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoldThin(props: LanBoldThinProps): React.ReactElement;
export default LanBoldThin;
