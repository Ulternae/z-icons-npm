import React from 'react';

export interface MinaPanelRightInactiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPanelRightInactive(props: MinaPanelRightInactiveProps): React.ReactElement;
export default MinaPanelRightInactive;
