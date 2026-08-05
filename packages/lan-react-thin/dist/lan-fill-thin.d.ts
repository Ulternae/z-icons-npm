import React from 'react';

export interface LanFillThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFillThin(props: LanFillThinProps): React.ReactElement;
export default LanFillThin;
