import React from 'react';

export interface MinaMenuProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMenu: React.FC<MinaMenuProps>;
export default MinaMenu;
