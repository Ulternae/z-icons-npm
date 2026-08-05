import React from 'react';

export interface NeoGlobeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoGlobeSolid(props: NeoGlobeSolidProps): React.ReactElement;
export default NeoGlobeSolid;
