import React from 'react';

export interface LanDownLeftThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDownLeftThin(props: LanDownLeftThinProps): React.ReactElement;
export default LanDownLeftThin;
