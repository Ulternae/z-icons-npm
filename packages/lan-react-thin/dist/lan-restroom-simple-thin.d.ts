import React from 'react';

export interface LanRestroomSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRestroomSimpleThin(props: LanRestroomSimpleThinProps): React.ReactElement;
export default LanRestroomSimpleThin;
