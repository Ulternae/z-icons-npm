import React from 'react';

export interface LanBorderAllThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderAllThin(props: LanBorderAllThinProps): React.ReactElement;
export default LanBorderAllThin;
