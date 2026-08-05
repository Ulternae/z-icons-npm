import React from 'react';

export interface LanPlaneUpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneUpRegular(props: LanPlaneUpRegularProps): React.ReactElement;
export default LanPlaneUpRegular;
