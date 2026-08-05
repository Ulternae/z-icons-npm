import React from 'react';

export interface LanAngleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAngleRegular(props: LanAngleRegularProps): React.ReactElement;
export default LanAngleRegular;
