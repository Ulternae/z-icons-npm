import React from 'react';

export interface LanBookUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookUserRegular(props: LanBookUserRegularProps): React.ReactElement;
export default LanBookUserRegular;
