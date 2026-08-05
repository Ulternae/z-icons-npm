import React from 'react';

export interface MinaPanelTopInactiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPanelTopInactiveSolid(props: MinaPanelTopInactiveSolidProps): React.ReactElement;
export default MinaPanelTopInactiveSolid;
