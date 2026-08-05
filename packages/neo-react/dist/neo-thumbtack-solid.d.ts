import React from 'react';

export interface NeoThumbtackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoThumbtackSolid(props: NeoThumbtackSolidProps): React.ReactElement;
export default NeoThumbtackSolid;
