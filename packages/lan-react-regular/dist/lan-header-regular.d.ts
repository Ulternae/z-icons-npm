import React from 'react';

export interface LanHeaderRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeaderRegular(props: LanHeaderRegularProps): React.ReactElement;
export default LanHeaderRegular;
