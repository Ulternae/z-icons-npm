import React from 'react';

export interface MinaPanelTopCloseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelTopCloseSolid: React.FC<MinaPanelTopCloseSolidProps>;
export default MinaPanelTopCloseSolid;
