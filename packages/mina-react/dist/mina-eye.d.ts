import React from 'react';

export interface MinaEyeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEye(props: MinaEyeProps): React.ReactElement;
export default MinaEye;
