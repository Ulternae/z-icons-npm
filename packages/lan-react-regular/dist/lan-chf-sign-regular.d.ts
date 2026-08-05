import React from 'react';

export interface LanChfSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChfSignRegular(props: LanChfSignRegularProps): React.ReactElement;
export default LanChfSignRegular;
