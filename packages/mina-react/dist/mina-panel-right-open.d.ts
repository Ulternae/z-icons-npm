import React from 'react';

export interface MinaPanelRightOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPanelRightOpen(props: MinaPanelRightOpenProps): React.ReactElement;
export default MinaPanelRightOpen;
