import React from 'react';

export interface MinaLightningOffSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLightningOffSolid(props: MinaLightningOffSolidProps): React.ReactElement;
export default MinaLightningOffSolid;
