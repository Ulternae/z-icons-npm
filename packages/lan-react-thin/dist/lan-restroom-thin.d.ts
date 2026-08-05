import React from 'react';

export interface LanRestroomThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRestroomThin(props: LanRestroomThinProps): React.ReactElement;
export default LanRestroomThin;
