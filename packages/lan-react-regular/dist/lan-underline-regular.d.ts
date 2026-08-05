import React from 'react';

export interface LanUnderlineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUnderlineRegular(props: LanUnderlineRegularProps): React.ReactElement;
export default LanUnderlineRegular;
