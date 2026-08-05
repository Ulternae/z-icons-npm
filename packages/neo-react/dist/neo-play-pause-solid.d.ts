import React from 'react';

export interface NeoPlayPauseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPlayPauseSolid(props: NeoPlayPauseSolidProps): React.ReactElement;
export default NeoPlayPauseSolid;
