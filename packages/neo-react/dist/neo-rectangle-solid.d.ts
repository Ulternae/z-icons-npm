import React from 'react';

export interface NeoRectangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoRectangleSolid(props: NeoRectangleSolidProps): React.ReactElement;
export default NeoRectangleSolid;
