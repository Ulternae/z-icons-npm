import React from 'react';

export interface MinaPanelLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPanelLeftSolid(props: MinaPanelLeftSolidProps): React.ReactElement;
export default MinaPanelLeftSolid;
