import React from 'react';

export interface MinaCloudFogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudFog(props: MinaCloudFogProps): React.ReactElement;
export default MinaCloudFog;
