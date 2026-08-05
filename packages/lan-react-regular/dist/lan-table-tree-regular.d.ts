import React from 'react';

export interface LanTableTreeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableTreeRegular(props: LanTableTreeRegularProps): React.ReactElement;
export default LanTableTreeRegular;
