import React from 'react';

export interface LanImageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageRegular(props: LanImageRegularProps): React.ReactElement;
export default LanImageRegular;
