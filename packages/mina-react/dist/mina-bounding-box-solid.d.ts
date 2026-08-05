import React from 'react';

export interface MinaBoundingBoxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBoundingBoxSolid(props: MinaBoundingBoxSolidProps): React.ReactElement;
export default MinaBoundingBoxSolid;
