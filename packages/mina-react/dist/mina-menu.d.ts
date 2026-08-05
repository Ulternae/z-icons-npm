import React from 'react';

export interface MinaMenuProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMenu(props: MinaMenuProps): React.ReactElement;
export default MinaMenu;
