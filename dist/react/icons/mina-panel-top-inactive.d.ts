import React from 'react';

export interface MinaPanelTopInactiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelTopInactive: React.FC<MinaPanelTopInactiveProps>;
export default MinaPanelTopInactive;
