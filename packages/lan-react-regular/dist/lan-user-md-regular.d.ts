import React from 'react';

export interface LanUserMdRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserMdRegular(props: LanUserMdRegularProps): React.ReactElement;
export default LanUserMdRegular;
