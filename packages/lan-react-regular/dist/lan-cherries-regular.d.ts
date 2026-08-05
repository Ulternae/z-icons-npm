import React from 'react';

export interface LanCherriesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCherriesRegular(props: LanCherriesRegularProps): React.ReactElement;
export default LanCherriesRegular;
