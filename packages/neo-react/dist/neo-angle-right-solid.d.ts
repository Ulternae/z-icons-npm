import React from 'react';

export interface NeoAngleRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoAngleRightSolid(props: NeoAngleRightSolidProps): React.ReactElement;
export default NeoAngleRightSolid;
