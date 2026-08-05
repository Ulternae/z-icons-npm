import React from 'react';

export interface LanCakeSliceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCakeSliceSolid(props: LanCakeSliceSolidProps): React.ReactElement;
export default LanCakeSliceSolid;
