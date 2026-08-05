import React from 'react';

export interface NeoGaugeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoGaugeSolid(props: NeoGaugeSolidProps): React.ReactElement;
export default NeoGaugeSolid;
