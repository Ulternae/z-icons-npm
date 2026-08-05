import React from 'react';

export interface MinaPanelTopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPanelTopSolid(props: MinaPanelTopSolidProps): React.ReactElement;
export default MinaPanelTopSolid;
