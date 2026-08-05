import React from 'react';

export interface MinaCookieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCookie(props: MinaCookieProps): React.ReactElement;
export default MinaCookie;
