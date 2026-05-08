import React from 'react';

export interface MinaTargetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTarget: React.FC<MinaTargetProps>;
export default MinaTarget;
