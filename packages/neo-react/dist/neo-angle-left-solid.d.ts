import React from 'react';

export interface NeoAngleLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoAngleLeftSolid(props: NeoAngleLeftSolidProps): React.ReactElement;
export default NeoAngleLeftSolid;
