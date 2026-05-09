import React from 'react';

export interface MinaPanelTopOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelTopOpenSolid: React.FC<MinaPanelTopOpenSolidProps>;
export default MinaPanelTopOpenSolid;
