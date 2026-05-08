import React from 'react';

export interface MinaPanelTopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelTopSolid: React.FC<MinaPanelTopSolidProps>;
export default MinaPanelTopSolid;
