import React from 'react';

export interface MinaPanelBottomSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelBottomSolid: React.FC<MinaPanelBottomSolidProps>;
export default MinaPanelBottomSolid;
