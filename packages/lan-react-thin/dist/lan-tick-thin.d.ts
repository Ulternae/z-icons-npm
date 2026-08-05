import React from 'react';

export interface LanTickThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTickThin(props: LanTickThinProps): React.ReactElement;
export default LanTickThin;
