import React from 'react';

export interface MinaLightningOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLightningOff(props: MinaLightningOffProps): React.ReactElement;
export default MinaLightningOff;
