import React from 'react';

export interface MinaPanelBottomProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPanelBottom(props: MinaPanelBottomProps): React.ReactElement;
export default MinaPanelBottom;
