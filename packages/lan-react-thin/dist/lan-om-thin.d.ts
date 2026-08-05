import React from 'react';

export interface LanOmThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOmThin(props: LanOmThinProps): React.ReactElement;
export default LanOmThin;
