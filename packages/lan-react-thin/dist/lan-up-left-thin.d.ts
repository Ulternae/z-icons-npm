import React from 'react';

export interface LanUpLeftThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUpLeftThin(props: LanUpLeftThinProps): React.ReactElement;
export default LanUpLeftThin;
