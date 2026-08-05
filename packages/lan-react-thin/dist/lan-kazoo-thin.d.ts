import React from 'react';

export interface LanKazooThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKazooThin(props: LanKazooThinProps): React.ReactElement;
export default LanKazooThin;
