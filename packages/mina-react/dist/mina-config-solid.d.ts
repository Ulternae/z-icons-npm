import React from 'react';

export interface MinaConfigSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaConfigSolid(props: MinaConfigSolidProps): React.ReactElement;
export default MinaConfigSolid;
