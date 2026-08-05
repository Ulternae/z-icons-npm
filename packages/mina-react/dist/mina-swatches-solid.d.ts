import React from 'react';

export interface MinaSwatchesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSwatchesSolid(props: MinaSwatchesSolidProps): React.ReactElement;
export default MinaSwatchesSolid;
