import React from 'react';

export interface MinaCloudLightningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudLightning(props: MinaCloudLightningProps): React.ReactElement;
export default MinaCloudLightning;
