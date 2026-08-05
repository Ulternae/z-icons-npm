import React from 'react';

export interface NeoVideoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoVideoSolid(props: NeoVideoSolidProps): React.ReactElement;
export default NeoVideoSolid;
