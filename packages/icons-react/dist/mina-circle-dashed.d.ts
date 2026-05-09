import React from 'react';

export interface MinaCircleDashedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCircleDashed: React.FC<MinaCircleDashedProps>;
export default MinaCircleDashed;
