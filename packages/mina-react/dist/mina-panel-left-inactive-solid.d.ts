import React from 'react';

export interface MinaPanelLeftInactiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPanelLeftInactiveSolid(props: MinaPanelLeftInactiveSolidProps): React.ReactElement;
export default MinaPanelLeftInactiveSolid;
