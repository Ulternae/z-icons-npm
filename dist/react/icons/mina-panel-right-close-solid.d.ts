import React from 'react';

export interface MinaPanelRightCloseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelRightCloseSolid: React.FC<MinaPanelRightCloseSolidProps>;
export default MinaPanelRightCloseSolid;
