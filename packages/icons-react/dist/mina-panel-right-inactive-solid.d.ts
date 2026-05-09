import React from 'react';

export interface MinaPanelRightInactiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelRightInactiveSolid: React.FC<MinaPanelRightInactiveSolidProps>;
export default MinaPanelRightInactiveSolid;
