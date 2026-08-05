import React from 'react';

export interface NeoCloneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCloneSolid(props: NeoCloneSolidProps): React.ReactElement;
export default NeoCloneSolid;
