import React from 'react';

export interface LanChalkboardUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChalkboardUserRegular(props: LanChalkboardUserRegularProps): React.ReactElement;
export default LanChalkboardUserRegular;
