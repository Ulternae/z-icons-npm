import React from 'react';

export interface MinaPanelBottomOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPanelBottomOpen(props: MinaPanelBottomOpenProps): React.ReactElement;
export default MinaPanelBottomOpen;
