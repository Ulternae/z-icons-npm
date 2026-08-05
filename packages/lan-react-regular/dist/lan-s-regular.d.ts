import React from 'react';

export interface LanSRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSRegular(props: LanSRegularProps): React.ReactElement;
export default LanSRegular;
