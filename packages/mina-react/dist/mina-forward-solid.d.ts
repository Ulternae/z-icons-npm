import React from 'react';

export interface MinaForwardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaForwardSolid(props: MinaForwardSolidProps): React.ReactElement;
export default MinaForwardSolid;
