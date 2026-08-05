import React from 'react';

export interface LanYRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanYRegular(props: LanYRegularProps): React.ReactElement;
export default LanYRegular;
