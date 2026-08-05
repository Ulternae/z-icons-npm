import React from 'react';

export interface MinaLightningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLightning(props: MinaLightningProps): React.ReactElement;
export default MinaLightning;
