import React from 'react';

export interface MinaPanelTopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPanelTop(props: MinaPanelTopProps): React.ReactElement;
export default MinaPanelTop;
