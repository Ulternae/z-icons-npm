import React from 'react';

export interface LanFireThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireThin(props: LanFireThinProps): React.ReactElement;
export default LanFireThin;
