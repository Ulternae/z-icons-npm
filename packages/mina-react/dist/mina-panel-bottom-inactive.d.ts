import React from 'react';

export interface MinaPanelBottomInactiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPanelBottomInactive(props: MinaPanelBottomInactiveProps): React.ReactElement;
export default MinaPanelBottomInactive;
