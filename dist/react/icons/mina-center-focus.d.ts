import React from 'react';

export interface MinaCenterFocusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCenterFocus: React.FC<MinaCenterFocusProps>;
export default MinaCenterFocus;
