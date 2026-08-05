import React from 'react';

export interface MinaPanelBottomSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPanelBottomSolid(props: MinaPanelBottomSolidProps): React.ReactElement;
export default MinaPanelBottomSolid;
