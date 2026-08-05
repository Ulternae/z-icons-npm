import React from 'react';

export interface LanChessPawnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessPawnRegular(props: LanChessPawnRegularProps): React.ReactElement;
export default LanChessPawnRegular;
