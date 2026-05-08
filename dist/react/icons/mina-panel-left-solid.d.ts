import React from 'react';

export interface MinaPanelLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelLeftSolid: React.FC<MinaPanelLeftSolidProps>;
export default MinaPanelLeftSolid;
