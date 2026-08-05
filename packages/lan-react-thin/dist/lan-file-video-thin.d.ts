import React from 'react';

export interface LanFileVideoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileVideoThin(props: LanFileVideoThinProps): React.ReactElement;
export default LanFileVideoThin;
