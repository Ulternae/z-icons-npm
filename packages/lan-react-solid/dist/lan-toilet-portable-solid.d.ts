import React from 'react';

export interface LanToiletPortableSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToiletPortableSolid(props: LanToiletPortableSolidProps): React.ReactElement;
export default LanToiletPortableSolid;
