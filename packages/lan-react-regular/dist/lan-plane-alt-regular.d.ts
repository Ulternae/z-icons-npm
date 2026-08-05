import React from 'react';

export interface LanPlaneAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneAltRegular(props: LanPlaneAltRegularProps): React.ReactElement;
export default LanPlaneAltRegular;
