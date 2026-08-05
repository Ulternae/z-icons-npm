import React from 'react';

export interface MinaPanelTopOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPanelTopOpen(props: MinaPanelTopOpenProps): React.ReactElement;
export default MinaPanelTopOpen;
