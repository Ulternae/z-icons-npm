import React from 'react';

export interface NeoPlaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPlaySolid(props: NeoPlaySolidProps): React.ReactElement;
export default NeoPlaySolid;
