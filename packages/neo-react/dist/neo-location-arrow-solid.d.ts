import React from 'react';

export interface NeoLocationArrowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLocationArrowSolid(props: NeoLocationArrowSolidProps): React.ReactElement;
export default NeoLocationArrowSolid;
