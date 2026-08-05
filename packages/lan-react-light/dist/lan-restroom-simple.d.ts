import React from 'react';

export interface LanRestroomSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRestroomSimple(props: LanRestroomSimpleProps): React.ReactElement;
export default LanRestroomSimple;
