import React from 'react';

export interface MinaGlassesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaGlassesSolid(props: MinaGlassesSolidProps): React.ReactElement;
export default MinaGlassesSolid;
