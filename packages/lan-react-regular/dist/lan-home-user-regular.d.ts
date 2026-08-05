import React from 'react';

export interface LanHomeUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHomeUserRegular(props: LanHomeUserRegularProps): React.ReactElement;
export default LanHomeUserRegular;
