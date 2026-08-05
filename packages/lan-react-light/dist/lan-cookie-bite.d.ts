import React from 'react';

export interface LanCookieBiteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCookieBite(props: LanCookieBiteProps): React.ReactElement;
export default LanCookieBite;
