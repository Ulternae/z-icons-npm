import React from 'react';

export interface LanToiletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToiletSolid(props: LanToiletSolidProps): React.ReactElement;
export default LanToiletSolid;
