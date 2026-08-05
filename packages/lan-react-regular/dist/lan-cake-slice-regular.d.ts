import React from 'react';

export interface LanCakeSliceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCakeSliceRegular(props: LanCakeSliceRegularProps): React.ReactElement;
export default LanCakeSliceRegular;
