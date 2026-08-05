import React from 'react';

export interface MinaCloudLightningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudLightningSolid(props: MinaCloudLightningSolidProps): React.ReactElement;
export default MinaCloudLightningSolid;
