import React from 'react';

export interface MinaMusicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMusicSolid(props: MinaMusicSolidProps): React.ReactElement;
export default MinaMusicSolid;
