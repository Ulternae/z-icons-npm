import React from 'react';

export interface MinaRadioSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRadioSolid(props: MinaRadioSolidProps): React.ReactElement;
export default MinaRadioSolid;
