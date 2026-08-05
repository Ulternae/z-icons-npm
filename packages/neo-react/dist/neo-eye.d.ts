import React from 'react';

export interface NeoEyeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoEye(props: NeoEyeProps): React.ReactElement;
export default NeoEye;
