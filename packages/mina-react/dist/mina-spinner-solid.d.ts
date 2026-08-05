import React from 'react';

export interface MinaSpinnerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSpinnerSolid(props: MinaSpinnerSolidProps): React.ReactElement;
export default MinaSpinnerSolid;
