import React from 'react';

export interface MinaPanelTopCloseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPanelTopClose(props: MinaPanelTopCloseProps): React.ReactElement;
export default MinaPanelTopClose;
