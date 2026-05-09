import React from 'react';

export interface MinaPanelRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelRightSolid: React.FC<MinaPanelRightSolidProps>;
export default MinaPanelRightSolid;
