import React from 'react';

export interface MinaSidebarAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSidebarAlt(props: MinaSidebarAltProps): React.ReactElement;
export default MinaSidebarAlt;
