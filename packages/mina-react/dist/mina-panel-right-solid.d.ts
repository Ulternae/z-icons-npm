import React from 'react';

export interface MinaPanelRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPanelRightSolid(props: MinaPanelRightSolidProps): React.ReactElement;
export default MinaPanelRightSolid;
