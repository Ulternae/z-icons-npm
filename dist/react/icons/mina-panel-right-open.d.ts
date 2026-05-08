import React from 'react';

export interface MinaPanelRightOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelRightOpen: React.FC<MinaPanelRightOpenProps>;
export default MinaPanelRightOpen;
