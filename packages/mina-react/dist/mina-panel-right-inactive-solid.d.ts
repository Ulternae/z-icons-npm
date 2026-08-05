import React from 'react';

export interface MinaPanelRightInactiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPanelRightInactiveSolid(props: MinaPanelRightInactiveSolidProps): React.ReactElement;
export default MinaPanelRightInactiveSolid;
