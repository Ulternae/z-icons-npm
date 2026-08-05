import React from 'react';

export interface LanSackRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSackRegular(props: LanSackRegularProps): React.ReactElement;
export default LanSackRegular;
