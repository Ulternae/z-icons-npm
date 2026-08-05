import React from 'react';

export interface LanCrownRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrownRegular(props: LanCrownRegularProps): React.ReactElement;
export default LanCrownRegular;
