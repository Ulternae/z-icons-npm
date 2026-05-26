import React from 'react';

export interface LanSagittariusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSagittariusThin: React.FC<LanSagittariusThinProps>;
export default LanSagittariusThin;
