import React from 'react';

export interface NeoAngleUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoAngleUp: React.FC<NeoAngleUpProps>;
export default NeoAngleUp;
