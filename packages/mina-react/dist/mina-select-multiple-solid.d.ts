import React from 'react';

export interface MinaSelectMultipleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSelectMultipleSolid(props: MinaSelectMultipleSolidProps): React.ReactElement;
export default MinaSelectMultipleSolid;
