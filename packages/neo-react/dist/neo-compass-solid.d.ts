import React from 'react';

export interface NeoCompassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCompassSolid(props: NeoCompassSolidProps): React.ReactElement;
export default NeoCompassSolid;
