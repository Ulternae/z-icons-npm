import React from 'react';

export interface NeoAngleRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoAngleRight: React.FC<NeoAngleRightProps>;
export default NeoAngleRight;
