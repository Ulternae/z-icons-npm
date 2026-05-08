import React from 'react';

export interface MinaPanelTopInactiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelTopInactiveSolid: React.FC<MinaPanelTopInactiveSolidProps>;
export default MinaPanelTopInactiveSolid;
