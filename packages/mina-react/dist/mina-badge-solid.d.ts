import React from 'react';

export interface MinaBadgeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBadgeSolid(props: MinaBadgeSolidProps): React.ReactElement;
export default MinaBadgeSolid;
