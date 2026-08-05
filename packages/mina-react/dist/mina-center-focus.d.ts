import React from 'react';

export interface MinaCenterFocusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCenterFocus(props: MinaCenterFocusProps): React.ReactElement;
export default MinaCenterFocus;
