import React from 'react';

export interface NeoLocationDotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLocationDotSolid(props: NeoLocationDotSolidProps): React.ReactElement;
export default NeoLocationDotSolid;
