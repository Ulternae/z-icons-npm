import React from 'react';

export interface LanCrutchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrutchThin(props: LanCrutchThinProps): React.ReactElement;
export default LanCrutchThin;
