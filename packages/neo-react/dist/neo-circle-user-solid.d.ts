import React from 'react';

export interface NeoCircleUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCircleUserSolid(props: NeoCircleUserSolidProps): React.ReactElement;
export default NeoCircleUserSolid;
