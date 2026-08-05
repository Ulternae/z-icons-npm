import React from 'react';

export interface MinaTwoCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTwoCircleSolid(props: MinaTwoCircleSolidProps): React.ReactElement;
export default MinaTwoCircleSolid;
