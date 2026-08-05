import React from 'react';

export interface MinaEditOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEditOneSolid(props: MinaEditOneSolidProps): React.ReactElement;
export default MinaEditOneSolid;
