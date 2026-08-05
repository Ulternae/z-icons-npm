import React from 'react';

export interface MinaPanelTopInactiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPanelTopInactive(props: MinaPanelTopInactiveProps): React.ReactElement;
export default MinaPanelTopInactive;
