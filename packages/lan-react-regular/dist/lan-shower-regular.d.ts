import React from 'react';

export interface LanShowerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShowerRegular(props: LanShowerRegularProps): React.ReactElement;
export default LanShowerRegular;
