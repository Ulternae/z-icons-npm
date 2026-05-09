import React from 'react';

export interface MinaToggleRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaToggleRight: React.FC<MinaToggleRightProps>;
export default MinaToggleRight;
