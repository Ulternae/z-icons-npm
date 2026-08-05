import React from 'react';

export interface MinaPanelRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPanelRight(props: MinaPanelRightProps): React.ReactElement;
export default MinaPanelRight;
