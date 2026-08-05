import React from 'react';

export interface MinaSpinnerOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSpinnerOneSolid(props: MinaSpinnerOneSolidProps): React.ReactElement;
export default MinaSpinnerOneSolid;
