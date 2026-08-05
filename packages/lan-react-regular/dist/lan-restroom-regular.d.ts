import React from 'react';

export interface LanRestroomRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRestroomRegular(props: LanRestroomRegularProps): React.ReactElement;
export default LanRestroomRegular;
