import React from 'react';

export interface MinaCloudFogSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudFogSolid(props: MinaCloudFogSolidProps): React.ReactElement;
export default MinaCloudFogSolid;
