import React from 'react';

export interface LanOrnamentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOrnamentSolid(props: LanOrnamentSolidProps): React.ReactElement;
export default LanOrnamentSolid;
