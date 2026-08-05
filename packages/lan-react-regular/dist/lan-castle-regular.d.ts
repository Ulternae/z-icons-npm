import React from 'react';

export interface LanCastleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCastleRegular(props: LanCastleRegularProps): React.ReactElement;
export default LanCastleRegular;
