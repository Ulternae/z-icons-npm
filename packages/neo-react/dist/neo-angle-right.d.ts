import React from 'react';

export interface NeoAngleRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoAngleRight(props: NeoAngleRightProps): React.ReactElement;
export default NeoAngleRight;
