import React from 'react';

export interface MinaPanelRightCloseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPanelRightClose(props: MinaPanelRightCloseProps): React.ReactElement;
export default MinaPanelRightClose;
