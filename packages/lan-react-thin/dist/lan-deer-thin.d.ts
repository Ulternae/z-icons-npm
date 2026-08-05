import React from 'react';

export interface LanDeerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDeerThin(props: LanDeerThinProps): React.ReactElement;
export default LanDeerThin;
