import React from 'react';

export interface NeoImageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoImageSolid(props: NeoImageSolidProps): React.ReactElement;
export default NeoImageSolid;
