import React from 'react';

export interface LanScarecrowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScarecrowRegular(props: LanScarecrowRegularProps): React.ReactElement;
export default LanScarecrowRegular;
