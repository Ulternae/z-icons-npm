import React from 'react';

export interface MinaPanelTopCloseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPanelTopCloseSolid(props: MinaPanelTopCloseSolidProps): React.ReactElement;
export default MinaPanelTopCloseSolid;
