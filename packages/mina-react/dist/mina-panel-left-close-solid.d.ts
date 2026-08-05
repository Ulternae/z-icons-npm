import React from 'react';

export interface MinaPanelLeftCloseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPanelLeftCloseSolid(props: MinaPanelLeftCloseSolidProps): React.ReactElement;
export default MinaPanelLeftCloseSolid;
