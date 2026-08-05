import React from 'react';

export interface MinaTargetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTargetSolid(props: MinaTargetSolidProps): React.ReactElement;
export default MinaTargetSolid;
