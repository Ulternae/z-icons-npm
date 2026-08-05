import React from 'react';

export interface MinaPanelLeftCloseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPanelLeftClose(props: MinaPanelLeftCloseProps): React.ReactElement;
export default MinaPanelLeftClose;
