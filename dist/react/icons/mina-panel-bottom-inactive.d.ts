import React from 'react';

export interface MinaPanelBottomInactiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelBottomInactive: React.FC<MinaPanelBottomInactiveProps>;
export default MinaPanelBottomInactive;
