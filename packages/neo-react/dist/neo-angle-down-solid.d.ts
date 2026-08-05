import React from 'react';

export interface NeoAngleDownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoAngleDownSolid(props: NeoAngleDownSolidProps): React.ReactElement;
export default NeoAngleDownSolid;
