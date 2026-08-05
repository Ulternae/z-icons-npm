import React from 'react';

export interface LanBoxOpenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxOpenThin(props: LanBoxOpenThinProps): React.ReactElement;
export default LanBoxOpenThin;
