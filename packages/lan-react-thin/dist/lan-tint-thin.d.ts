import React from 'react';

export interface LanTintThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTintThin(props: LanTintThinProps): React.ReactElement;
export default LanTintThin;
