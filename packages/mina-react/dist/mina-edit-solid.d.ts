import React from 'react';

export interface MinaEditSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEditSolid(props: MinaEditSolidProps): React.ReactElement;
export default MinaEditSolid;
