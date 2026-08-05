import React from 'react';

export interface LanPlaneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneRegular(props: LanPlaneRegularProps): React.ReactElement;
export default LanPlaneRegular;
