import React from 'react';

export interface LanRestroomSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRestroomSimpleRegular(props: LanRestroomSimpleRegularProps): React.ReactElement;
export default LanRestroomSimpleRegular;
