import React from 'react';

export interface MinaPanelBottomCloseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPanelBottomClose(props: MinaPanelBottomCloseProps): React.ReactElement;
export default MinaPanelBottomClose;
