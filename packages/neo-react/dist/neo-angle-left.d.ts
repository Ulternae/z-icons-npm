import React from 'react';

export interface NeoAngleLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoAngleLeft(props: NeoAngleLeftProps): React.ReactElement;
export default NeoAngleLeft;
