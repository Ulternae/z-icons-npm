import React from 'react';

export interface MinaPanelTopOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelTopOpen: React.FC<MinaPanelTopOpenProps>;
export default MinaPanelTopOpen;
