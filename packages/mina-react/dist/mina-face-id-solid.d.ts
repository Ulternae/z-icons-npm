import React from 'react';

export interface MinaFaceIdSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFaceIdSolid(props: MinaFaceIdSolidProps): React.ReactElement;
export default MinaFaceIdSolid;
