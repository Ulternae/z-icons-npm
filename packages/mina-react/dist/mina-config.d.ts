import React from 'react';

export interface MinaConfigProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaConfig(props: MinaConfigProps): React.ReactElement;
export default MinaConfig;
