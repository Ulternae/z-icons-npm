import React from 'react';

export interface LanKThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKThin(props: LanKThinProps): React.ReactElement;
export default LanKThin;
