import React from 'react';

export interface MinaPanelLeftInactiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelLeftInactive: React.FC<MinaPanelLeftInactiveProps>;
export default MinaPanelLeftInactive;
