import React from 'react';

export interface MinaPanelRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelRight: React.FC<MinaPanelRightProps>;
export default MinaPanelRight;
