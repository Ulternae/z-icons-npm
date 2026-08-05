import React from 'react';

export interface LanOThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOThin(props: LanOThinProps): React.ReactElement;
export default LanOThin;
