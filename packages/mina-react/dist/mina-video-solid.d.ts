import React from 'react';

export interface MinaVideoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaVideoSolid(props: MinaVideoSolidProps): React.ReactElement;
export default MinaVideoSolid;
