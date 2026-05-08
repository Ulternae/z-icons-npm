import React from 'react';

export interface MinaPanelLeftInactiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelLeftInactiveSolid: React.FC<MinaPanelLeftInactiveSolidProps>;
export default MinaPanelLeftInactiveSolid;
