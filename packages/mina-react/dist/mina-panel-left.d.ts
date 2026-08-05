import React from 'react';

export interface MinaPanelLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPanelLeft(props: MinaPanelLeftProps): React.ReactElement;
export default MinaPanelLeft;
