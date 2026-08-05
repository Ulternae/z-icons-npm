import React from 'react';

export interface LanOarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOarThin(props: LanOarThinProps): React.ReactElement;
export default LanOarThin;
