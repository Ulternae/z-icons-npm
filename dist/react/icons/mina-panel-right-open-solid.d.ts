import React from 'react';

export interface MinaPanelRightOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelRightOpenSolid: React.FC<MinaPanelRightOpenSolidProps>;
export default MinaPanelRightOpenSolid;
