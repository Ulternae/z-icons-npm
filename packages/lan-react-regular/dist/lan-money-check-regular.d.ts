import React from 'react';

export interface LanMoneyCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyCheckRegular(props: LanMoneyCheckRegularProps): React.ReactElement;
export default LanMoneyCheckRegular;
