import React from 'react';

export interface MinaPanelTopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelTop: React.FC<MinaPanelTopProps>;
export default MinaPanelTop;
