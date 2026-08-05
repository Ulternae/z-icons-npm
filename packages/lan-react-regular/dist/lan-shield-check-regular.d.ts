import React from 'react';

export interface LanShieldCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldCheckRegular(props: LanShieldCheckRegularProps): React.ReactElement;
export default LanShieldCheckRegular;
