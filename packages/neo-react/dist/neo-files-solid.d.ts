import React from 'react';

export interface NeoFilesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFilesSolid(props: NeoFilesSolidProps): React.ReactElement;
export default NeoFilesSolid;
