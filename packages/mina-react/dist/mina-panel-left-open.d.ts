import React from 'react';

export interface MinaPanelLeftOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPanelLeftOpen(props: MinaPanelLeftOpenProps): React.ReactElement;
export default MinaPanelLeftOpen;
