import React from 'react';

export interface MinaPanelBottomInactiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelBottomInactiveSolid: React.FC<MinaPanelBottomInactiveSolidProps>;
export default MinaPanelBottomInactiveSolid;
