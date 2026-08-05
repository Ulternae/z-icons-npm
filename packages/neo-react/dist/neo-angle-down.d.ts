import React from 'react';

export interface NeoAngleDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoAngleDown(props: NeoAngleDownProps): React.ReactElement;
export default NeoAngleDown;
