import React from 'react';

export interface LanChimneyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChimneyRegular(props: LanChimneyRegularProps): React.ReactElement;
export default LanChimneyRegular;
