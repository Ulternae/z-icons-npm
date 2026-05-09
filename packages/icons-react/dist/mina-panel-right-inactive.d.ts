import React from 'react';

export interface MinaPanelRightInactiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelRightInactive: React.FC<MinaPanelRightInactiveProps>;
export default MinaPanelRightInactive;
