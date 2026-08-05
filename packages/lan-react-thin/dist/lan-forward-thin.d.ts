import React from 'react';

export interface LanForwardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanForwardThin(props: LanForwardThinProps): React.ReactElement;
export default LanForwardThin;
