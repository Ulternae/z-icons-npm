import React from 'react';

export interface LanZapRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanZapRegular(props: LanZapRegularProps): React.ReactElement;
export default LanZapRegular;
