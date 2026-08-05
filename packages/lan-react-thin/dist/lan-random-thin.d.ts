import React from 'react';

export interface LanRandomThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRandomThin(props: LanRandomThinProps): React.ReactElement;
export default LanRandomThin;
