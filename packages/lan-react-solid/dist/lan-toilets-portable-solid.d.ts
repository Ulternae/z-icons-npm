import React from 'react';

export interface LanToiletsPortableSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToiletsPortableSolid(props: LanToiletsPortableSolidProps): React.ReactElement;
export default LanToiletsPortableSolid;
