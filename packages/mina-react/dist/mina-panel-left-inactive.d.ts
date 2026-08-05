import React from 'react';

export interface MinaPanelLeftInactiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPanelLeftInactive(props: MinaPanelLeftInactiveProps): React.ReactElement;
export default MinaPanelLeftInactive;
