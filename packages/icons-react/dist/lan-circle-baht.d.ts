import React from 'react';

export interface LanCircleBahtProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleBaht: React.FC<LanCircleBahtProps>;
export default LanCircleBaht;
