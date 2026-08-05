import React from 'react';

export interface MinaCenterFocusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCenterFocusSolid(props: MinaCenterFocusSolidProps): React.ReactElement;
export default MinaCenterFocusSolid;
